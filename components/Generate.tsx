"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ChevronRightCircle, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

import React from "react";
import DynamicCodeRenderer from "@/components/DynamicCodeRenderer ";
import CodePanel from "@/components/CodePanel";

const Generate = () => {
  const [prompt, setPrompt] = useState("");
  const [editPrompt, setEditPrompt] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    setLoading(true);
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    if (res.ok) {
      const data = await res.json();
      setCode(data);
      setLoading(false);
    } else {
      setError("Error while generating");
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generate();
  };

  const generateEdit = async () => {
    setEditLoading(true);
    const res = await fetch("/api/chat-edit", {
      method: "POST",
      body: JSON.stringify({ prompt: editPrompt, code }),
    });
    if (res.ok) {
      const data = await res.json();
      setCode(data);
      setEditLoading(false);
    } else {
      setError("Error while modifiying");
    }
  };

  const submitEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateEdit();
  };

  return (
    <section id="home">
      <div className="flex w-full justify-center p-4 mb-6">
        <form onSubmit={submit}>
          <label htmlFor="email" className="relative">
            <p className="absolute top-1/2 transform -translate-y-1/2 left-3 text-white dark:text-black">
              Y-UI |
            </p>
            <Input
              className={cn(
                "md:w-[600px] w-full rounded-full bg-black text-white pl-16 dark:bg-white dark:text-black",
                loading && "bg-gray-600 text-gray-50"
              )}
              placeholder="A chat application"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              readOnly={loading}
            />
            <Button
              size="icon"
              variant="link"
              className="absolute top-1/2 transform -translate-y-1/2 right-1 text-primary"
              disabled={loading}
              type="submit"
            >
              {!loading ? (
                <ChevronRightCircle className="text-white dark:text-black" />
              ) : (
                <Loader2 className="text-white dark:text-black animate-spin" />
              )}
            </Button>
          </label>
        </form>
      </div>
      {code && (
        <Tabs defaultValue="canvas" className="w-full p-5">
          <TabsList>
            <TabsTrigger value="canvas">Canvas</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <div className="shadow-lg rounded-lg">
            <TabsContent value="canvas">
              <DynamicCodeRenderer code={code} />
            </TabsContent>
            <TabsContent value="code">
              <CodePanel code={code} />
            </TabsContent>
          </div>
          <div className="justify-center flex p-4">
            <form onSubmit={submitEdit}>
              <label htmlFor="email" className="relative">
                <Input
                  className={cn(
                    "md:w-[600px] w-full rounded-full bg-black text-white dark:bg-white dark:text-black",
                    editLoading && "bg-gray-600 text-gray-50"
                  )}
                  placeholder="Edit the result"
                  value={editPrompt}
                  onChange={(e) => setEditPrompt(e.target.value)}
                  readOnly={editLoading}
                />
                <Button
                  size="icon"
                  variant="link"
                  className="absolute top-1/2 transform -translate-y-1/2 right-1 text-primary"
                  disabled={editLoading}
                  type="submit"
                >
                  {!editLoading ? (
                    <ChevronRightCircle className="text-white dark:text-black" />
                  ) : (
                    <Loader2 className="text-white dark:text-black animate-spin" />
                  )}
                </Button>
              </label>
            </form>
          </div>
          <div className="text-sm text-red-500">{error}</div>
        </Tabs>
      )}
    </section>
  );
};

export default Generate;

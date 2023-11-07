import Generate from "./Generate";

export default function page() {
  return (
    <main className="pt-8">
      <p className="text-4xl text-primary font-semibold w-full text-center py-6">
        Welcome to Y-UI
      </p>
      <Generate />
    </main>
  );
}

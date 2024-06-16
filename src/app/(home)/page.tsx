import { Card } from "./components/Card";

export default function Page() {
  return (
    <main className="mx-auto flex flex-col items-center justify-center gap-6 xl:grid xl:grid-cols-[repeat(3,350px)] xl:gap-10">
      <Card
        href="/face-detection"
        title="Face Detection"
        description="Face detection built with Media Pipe"
      />

      <Card
        href="/landing"
        title="Landing"
        description="Landing site example"
      />

      <Card
        href="/email"
        title="Email"
        description="Email template built with React Email"
      />
    </main>
  );
}

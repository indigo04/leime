import Cardlist from "@/components/Cardlist";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Nav />
      <Cardlist />
    </main>
  );
}

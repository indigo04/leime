import Cardlist from "@/components/Cardlist";
import Nav from "@/components/Navbar";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Nav />
      <Cardlist />
    </main>
  );
}

import Nav from "../components/Navbar";

import Cardlist from "@/components/Cardlist";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Nav />
      <Cardlist />
    </main>
  );
}

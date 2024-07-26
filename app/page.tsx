import Image from "next/image";
import NavBar from "./components/NavBar"
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <main>
      <NavBar />
      <MainContent />
    </main>
  );
}

import Image from "next/image";
import Home from './home';
import Collection from './collection';
import Choose from "./choose";
import About from "./about";
import Roadmap from "./roadmap";
import Blog from "./blog";

export default function Page() {
  return (
    <main>
      <Home />
      <Collection />
      <Choose />
      <About />
      <Roadmap />
      <Blog />
    </main>
  );
}

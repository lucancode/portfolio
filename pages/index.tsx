import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Head from "next/head";
import About from "@/components/About";
import Projects from "@/components/Projects";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-[100px] ${poppins.className}`}
    >
      <Head>
        <title>Welcome to the Portfolio for Lungelo Ntuli</title>
        <link rel="icon" href="" />
      </Head>
      <Navbar />
      <Banner />
      <About />
      <Projects />
    </main>
  );
}

import Head from "next/head";
import Image from "next/image";
import ImageCarousel from "../components/pages/home/Carousel";
import Process from "../components/pages/home/Process";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <ImageCarousel />
      <Process />
    </div>
  );
}

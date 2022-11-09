import Head from "next/head";
import Image from "next/image";
import ImageCarousel from "../components/pages/home/Carousel";
import Process from "../components/pages/home/Process";
import styles from "../styles/Home.module.css";
import ReviewList from "../components/pages/home/ReviewList"

export default function Home() {
  return (
    <div>
      <ImageCarousel />
      <Process />
      <ReviewList />
    </div>
  );
}

"use client";
import Image from "next/image";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/profil.jpg"
          alt="Photo de profil"
          width={160}
          height={160}
          priority
        />
      </div>

      <h1>Bienvenue sur mon portfolio</h1>
      <p>
        Je suis développeuse web passionnée par le front-end, curieuse et
        toujours prête à apprendre
      </p>
    </div>
  );
}

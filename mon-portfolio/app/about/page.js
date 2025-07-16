"use client";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>À propos de moi</h1>
        <p className={styles.text}>
          Je suis une technicienne en développement web passionnée par React et
          Next.js.
        </p>
      </div>
    </>
  );
}

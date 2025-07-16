"use client";
import Navbar from "../components/Navbar";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Contactez-moi</h1>
        <p className={styles.text}>eyalghoul@gmail.com</p>
      </div>
    </>
  );
}

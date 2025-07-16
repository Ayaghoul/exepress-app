"use client";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        Accueil
      </Link>
      <Link href="/about" className={styles.link}>
        À propos
      </Link>
      <Link href="/contact" className={styles.link}>
        Contact
      </Link>
      <Link href="/project" className={styles.link}>
        Projects
      </Link>
    </nav>
  );
}

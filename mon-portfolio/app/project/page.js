import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Mes Projets</h1>
        <ul className={styles.projectList}>
          <li>Application de gestion de stagiaire</li>
          <li>Application de gestion de restaurant</li>
        </ul>
      </div>
    </>
  );
}

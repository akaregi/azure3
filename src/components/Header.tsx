import Menu from "./Menu";

import styles from "@/styles/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.site_title}>WWW.AZURE.ICU</p>
      <Menu />
    </header>
  );
}

import Link from "next/link";
import styles from "@/styles/components/Menu.module.css";

export default function Menu() {
  return (
    <>
      <p className={styles.menu_title}>AZURE.ICU</p>
      <nav className={styles.main}>
        <ul className={styles.menu_items}>
          <li className={styles.menu_item}>
            <Link href="/">HOME</Link>
          </li>
          <li className={styles.menu_item}>
            <Link href="/works">WORKS</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

import Link from "next/link";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.homeLink}>
          <Link href="/">
            <span>asuwant</span>
          </Link>
        </div>
        <div className={styles.menus}>
          <div>
            <ul>
              <li>credits</li>
            </ul>
          </div>
          <div>
            <p>notification</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

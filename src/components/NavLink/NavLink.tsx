import { memo } from "react";
import styles from "./NavLink.module.css";

type NavLinkType = {
  href: string;
  children: string;
};

function NavLink({ href, children }: NavLinkType) {
  return (
    <li className={styles.menuItem}>
      <a href={href} className={styles.menuLink}>
        {children}
      </a>
    </li>
  );
}

export default memo(NavLink);

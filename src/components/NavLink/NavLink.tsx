import { memo } from "react";
import styles from "./NavLink.module.css";
import Link from "next/link";

type NavLinkType = {
  href: string;
  children: string;
};

function NavLink({ href, children }: NavLinkType) {
  return (
    <li className={styles.menuItem}>
      <Link href={href} className={styles.menuLink}>
        {children}
      </Link>
    </li>
  );
}

export default memo(NavLink);

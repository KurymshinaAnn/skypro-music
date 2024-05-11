import styles from "./NavLink.module.css";

type NavLinkType = {
  href: string;
  children: string;
};

export default function NavLink({ href, children }: NavLinkType) {
  return (
    <li className={styles.menuItem}>
      <a href={href} className={styles.menuLink}>
        {children}
      </a>
    </li>
  );
}

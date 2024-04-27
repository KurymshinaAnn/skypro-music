"use client";
import { useState } from "react";
import styles from "./Nav.module.css";
import NavBurger from "@/components/NavBurger/NavBurger";
import Logo from "@/components/Logo/Logo";

export default function Nav() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  function handleNavClick(newClick: string) {
    setActiveNav((prev) => (newClick === prev ? null : newClick));
  }

  return (
    <>
      <nav className={styles.mainNav}>
        <Logo></Logo>
        <NavBurger
          onClick={() => handleNavClick("menu")}
          isOpen={activeNav === "menu"}
        ></NavBurger>
      </nav>
    </>
  );
}

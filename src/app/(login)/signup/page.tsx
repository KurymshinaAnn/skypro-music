"use client";

import Image from "next/image";
import classNames from "classnames";

import styles from "./Signup.module.css";
import { useState } from "react";
import { register } from "@/api/login";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const doRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    register({
      email,
      password,
      username: email,
    }).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.modalBlock}>
        <form className={styles.modalForm}>
          <a href="../">
            <div className={styles.modalLogo}>
              <Image
                src="/img/logo_modal.png"
                alt="logo_img"
                width={114}
                height={17}
              />
            </div>
          </a>
          <div className={styles.inputForm}>
            <input
              className={styles.input}
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className={styles.input}
              type="password"
              name="repeat-password"
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <button className={styles.button} onClick={doRegister}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

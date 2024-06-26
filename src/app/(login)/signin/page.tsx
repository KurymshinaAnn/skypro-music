"use client";

import Image from "next/image";
import classNames from "classnames";

import styles from "./Signin.module.css";
import Link from "next/link";
import { useState } from "react";
import { login, tokens } from "@/api/login";
import { useAppDispatch } from "@/hooks";
import { setUser } from "@/store/features/playlistSlice";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    login({
      email,
      password,
    })
      .then((data) => {
        if (data.status === 200) {
          return data.json;
        } else {
          alert("Какая то ошибка!");
        }
      })
      .then((user) => {
        return tokens({ email, password }).then((token) => {
          dispatch(
            setUser({
              username: user.username,
              access: token.access,
              refresh: token.refresh,
            })
          );
          router.push("/");
        });
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
          </div>
          <button className={styles.button} onClick={doLogin}>
            Войти
          </button>
          <button className={styles.underButton}>
            <Link href="/signup" className={styles.text}>Зарегистрироваться</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

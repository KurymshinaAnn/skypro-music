"use client";

import Image from "next/image";
import classNames from "classnames";

import styles from "./Signin.module.css";
import Link from "next/link";
import { useState } from "react";
import { login } from "@/api/login";
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

    dispatch(setUser({ username: "dff", refresh: "ffff", access: "rrtg" }));
    router.push("/");

    // login({
    //   email,
    //   password,
    // }).then((data) => {
    //   console.log(data);
    // });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} action="#">
            <a href="../">
              <div className={styles.modalLogo}>
                <Image
                  src="/img/logo.png"
                  alt="logo_img"
                  width={114}
                  height={17}
                />
              </div>
            </a>
            <div>
              <input
                className={classNames(styles.modalInput, styles.login)}
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={classNames(styles.modalInput, styles.password)}
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className={styles.modalBtnEnter} onClick={doLogin}>
                Войти
              </button>
              <button className={styles.modalBtnSignup}>
                <Link href="/signup">Зарегистрироваться</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

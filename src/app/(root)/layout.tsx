import styles from "./layout.module.css";

import Bar from "@/components/Bar/Bar";
import Nav from "@/components/Nav/Nav";
import Search from "@/components/Search/Search";
import User from "@/components/User/User";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav></Nav>
          <div className={styles.userBlock}>
            <div className={styles.upBlock}>
              <Search></Search>
              <User></User>
            </div>
            <div className={styles.center}>{children}</div>
          </div>
        </main>
        <Bar></Bar>
      </div>
    </div>
  );
}

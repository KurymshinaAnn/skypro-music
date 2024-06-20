import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import styles from "./layout.module.css";

import ReduxProvider from "@/store/ReduxProvider";

import Bar from "@/components/Bar/Bar";
import Nav from "@/components/Nav/Nav";
import Search from "@/components/Search/Search";
import User from "@/components/User/User";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "SP-Music",
  description: "Music player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <ReduxProvider>
        <body className={montserrat.className}>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <main className={styles.main}>
                <Nav></Nav>
                <div>
                  <Search></Search>
                  <User></User>
                  <div className={styles.center}>{children}</div>
                </div>
              </main>
              <Bar></Bar>
            </div>
          </div>
        </body>
      </ReduxProvider>
    </html>
  );
}

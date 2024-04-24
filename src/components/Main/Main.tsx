import styles from "./Main.module.css";
import Nav from "../Nav/Nav";
import Centar from "../Centar/Centar";
// import MainSlideBar from "../MainSlideBar/MainSlideBar"

export default function Main() {
  return (
    <main className={styles.main}>
      <Nav></Nav>
      <Centar></Centar>
      {/* <MainSlideBar></MainSlideBar> */}
    </main>
  );
}

// надо восстановить маинслайдербар

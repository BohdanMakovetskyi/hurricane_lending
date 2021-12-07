import { SCROLL } from "../../constants";

import styles from "./Contacts.module.scss";

const Contacts = () => (
  <div id={SCROLL.CONTACT} className={styles.container}>
    <h2 className={styles.header}>Контакти</h2>
    <p>м. Львів, вул. Панча 12, Україна</p>
    <p>+38(097)84-27-118 (Богдан)</p>
    <p className={styles.email}>hurricane.sweater@gmail.com</p>

    <footer>Hurricane sweater &#169; {new Date().getFullYear()}</footer>
  </div>
);

export { Contacts };

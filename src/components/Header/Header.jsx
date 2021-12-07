import { SCROLL } from "../../constants";

import styles from "./Header.module.scss";

const scrollTo = (name) =>
  document
    .getElementById(name)
    .scrollIntoView({ block: "center", behavior: "smooth" });

const Header = () => (
  <div className={styles.container}>
    <h1>Hurricane</h1>
    <nav>
      <ul>
        <li onClick={() => scrollTo(SCROLL.GALLERY)}>Галерея</li>
        <li onClick={() => scrollTo(SCROLL.ORDER)}>Доставка і оплата</li>
        <li onClick={() => scrollTo(SCROLL.CONTACT)}>Контакти</li>
      </ul>
    </nav>
  </div>
);

export { Header };

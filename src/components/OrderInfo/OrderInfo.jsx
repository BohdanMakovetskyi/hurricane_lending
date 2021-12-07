import { ORDER_INFO, SCROLL } from "../../constants";

import styles from "./OrderInfo.module.scss";

const Info = ({ children, description }) => (
  <div className={styles.infoContainer}>
    {children}
    <div className={styles.description}>{description}</div>
  </div>
);

const OrderInfo = () => (
  <div id={SCROLL.ORDER}>
    <h2 className={styles.header}>Доставка і оплата</h2>
    <div className={styles.container}>
      {ORDER_INFO.map((item) => (
        <Info key={item.id} description={item.description}>
          {item.icon}
        </Info>
      ))}
    </div>
  </div>
);

export { OrderInfo };

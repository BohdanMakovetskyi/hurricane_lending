import { useState, useEffect } from "react";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { SIZES } from "../../constants";
import classnames from "classnames";

import styles from "./Sweater.module.scss";

const Sweater = ({ id, photo, price, addNewItem, realPrice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState("");
  const [buttonValue, setButtonValue] = useState("Купити");

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  const changeValueButton = (text) => {
    setButtonValue(text);
    setTimeout(() => {
      setButtonValue("Купити");
    }, 2000);
  };

  const addItemToCard = () => {
    if (!size) {
      changeValueButton("Оберіть розмір!");
      return;
    }
    addNewItem({ id, price, photo, size, realPrice });
    changeValueButton("Додано в корзину!");
    setSize("");
  };

  return (
    <>
      <div className={styles.container}>
        <img alt={id} src={photo} />
        <div className={styles.price}>{price}</div>
        <div className={styles.sizes}>
          {SIZES.map((item) => (
            <div
              key={item}
              className={classnames(styles.item, {
                [styles.itemMark]: item === size,
              })}
              onClick={() => setSize(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={styles.btns}>
          <button onClick={() => addItemToCard()} className={styles.buy}>
            {buttonValue}
          </button>
          <button onClick={() => setIsOpen(true)}>Детальніше</button>
        </div>
      </div>
      {isOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <img src={photo} alt={id} />
            <p>
              Виробник: Турція <br />
              Матеріал: Wool 50%, Acrylic 50
              <br />
              Стать: Унісекс
            </p>
            <CloseIcon
              size={25}
              className={styles.closeIcon}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { Sweater };

import {
  Header,
  Sweater,
  About,
  OrderInfo,
  Gallery,
  Order,
  Contacts,
} from "./components";
import { useState, useEffect } from "react";
import { GOODS } from "./constants";
import { BsBasket as Cart } from "react-icons/bs";

import styles from "./App.module.scss";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isOpenCart, setIsOpenCart] = useState(false);

  useEffect(() => {
    isOpenCart
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpenCart]);

  const addNewItem = (item) => {
    console.log(cart.find(cartItem => cartItem.id === item.id), 'asdasdasdas');
    // if (cart.find(cartItem => cartItem.id === item.id)) {
    //   setCart([...cart, { ...cart.find(cartItem => cartItem.id === item.id), count: }])
    // }
    setCart([...cart, item])
  };

  const removeItemFromCart = (id) => {
    if (cart.length === 1) {
      setCart([]);
      setIsOpenCart(false);
      return;
    }
    setCart(cart.filter((item) => item.id === id));
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        {GOODS.map((item) => (
          <Sweater
            key={item.id}
            id={item.id}
            photo={item.photo}
            addNewItem={addNewItem}
            price={item.price}
            realPrice={item.realPrice}
          />
        ))}
      </div>
      <About />
      <OrderInfo />
      <Gallery />
      <Contacts />
      {cart.length ? (
        <div className={styles.cart} onClick={() => setIsOpenCart(true)}>
          <Cart />
          <span className={styles.mark}>{cart.length}</span>
        </div>
      ) : null}
      {isOpenCart && (
        <Order
          removeItemFromCart={removeItemFromCart}
          closeCart={() => setIsOpenCart(false)}
          cart={cart}
        />
      )}
    </div>
  );
};
export { App };

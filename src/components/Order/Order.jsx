import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { Formik } from "formik";
import emailjs from "emailjs-com";
import {
  YOUR_SERVICE_ID,
  YOUR_USER_ID,
  YOUR_TEMPLATE_ID,
} from "../../constants";

import styles from "./Order.module.scss";
import { useState } from "react";

const Order = ({ cart, closeCart, removeItemFromCart }) => {
  const getSum = () => cart.reduce((sum, item) => (sum += item.realPrice), 0);
  const [btnValue, setBtnValue] = useState("Оформити замовлення!");

  const onSubmitForm = async (form) => {
    setBtnValue("Заказ обробляється!");
    const data = { ...form, cart };
    await emailjs.send(
      YOUR_SERVICE_ID,
      YOUR_TEMPLATE_ID,
      { data: JSON.stringify(data) },
      YOUR_USER_ID
    );
    setBtnValue("Замовлення прийнято!");
    setTimeout(() => {
      closeCart();
    }, 1000);
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Обов'язкове поле!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Не правильний емайл!";
    }
    if (!values.name) {
      errors.name = "Обов'язкове поле!";
    }
    if (!values.phone) {
      errors.phone = "Обов'язкове поле!";
    }
    if (!values.address) {
      errors.address = "Обов'язкове поле!";
    }
    return errors;
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.container}>
        <CloseIcon size={25} onClick={closeCart} className={styles.closeIcon} />
        <h2 className={styles.header}>Корзина</h2>
        <div className={styles.goods}>
          {cart.map((item) => (
            <div key={item.id} className={styles.good}>
              <img src={item.photo} alt={item.photo} />
              <div className={styles.description}>
                <p>Розмір: {item.size}</p>
                <p>{item.price}</p>
              </div>
              <CloseIcon
                size={15}
                onClick={() => removeItemFromCart(item.id)}
                className={styles.remove}
              />
            </div>
          ))}
        </div>
        <div className={styles.sum}>Сума: {getSum()} грн.</div>

        <div className={styles.order}>
          <h2 className={styles.header}>Дані для заказу:</h2>

          <Formik
            initialValues={{ name: "", phone: "", email: "", address: "" }}
            validate={validateForm}
            onSubmit={onSubmitForm}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className={styles.forma} onSubmit={handleSubmit}>
                <label>ПІБ*</label>
                <div className={styles.oneInput}>
                  <input
                    type="name"
                    name="name"
                    placeholder="Ім'я Прізвище По-батькові"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <p>{errors.name && touched.name && errors.name}</p>
                </div>
                <label>Номер телефону*</label>
                <div className={styles.oneInput}>
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Телефон"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <p>{errors.phone && touched.phone && errors.phone}</p>
                </div>
                <label>Email*</label>
                <div className={styles.oneInput}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <p>{errors.email && touched.email && errors.email}</p>
                </div>
                <label>Адрес Нової Пошти*</label>
                <div className={styles.oneInput}>
                  <input
                    type="address"
                    name="address"
                    placeholder="Адрес нової пошти"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  <p>{errors.address && touched.address && errors.address}</p>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  {btnValue}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export { Order };

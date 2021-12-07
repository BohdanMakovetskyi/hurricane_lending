import {
  MdStars as Star,
  MdAssistantNavigation as Navigate,
} from "react-icons/md";
import { IoIosLocate as Locate } from "react-icons/io";
import { RiMoneyEuroCircleFill as Money } from "react-icons/ri";
import { AiFillCodeSandboxCircle as Circle } from "react-icons/ai";
import img1 from "./images/man.jfif";
import img2 from "./images/man1.jfif";
import img3 from "./images/man2.jfif";
import img4 from "./images/man3.jfif";
import img5 from "./images/man4.jfif";
import img6 from "./images/man5.jfif";

export const GOODS = [
  { id: 1, photo: img2, price: "699 грн.", realPrice: 699 },
  { id: 2, photo: img3, price: "699 грн.", realPrice: 699 },
  { id: 0, photo: img1, price: "699 грн.", realPrice: 699 },
  { id: 3, photo: img4, price: "699 грн.", realPrice: 699 },
  { id: 4, photo: img5, price: "699 грн.", realPrice: 699 },
  { id: 5, photo: img6, price: "699 грн.", realPrice: 699 },
];

export const ORDER_INFO = [
  {
    id: 0,
    icon: <Navigate size={62} />,
    description: "Доставляємо по всій країні Нова Пошта",
  },
  {
    id: 1,
    icon: <Star size={80} />,
    description: "Безплатна доставка для заказів від 700 гривень",
  },
  {
    id: 2,
    icon: <Locate size={80} />,
    description: "Доставимо до дверей або лишимо в поштоматі",
  },
  {
    id: 3,
    icon: <Money size={76} />,
    description: "Оплатіть ваш заказ картою або готівкою",
  },
  {
    id: 4,
    icon: <Circle size={64} />,
    description: "У вас буде 60 днів гарантії на товар",
  },
];

export const SCROLL = {
  GALLERY: "GALLERY",
  ORDER: "ORDER",
  CONTACT: "CONTACT",
  TAKE_ORDER: "TAKE_ORDER",
};

export const SIZES_ = {
  XL: "XL",
  M: "M",
  L: "L",
  S: "S",
};

export const SIZES = ["S", "M", "L", "XL"];

export const YOUR_SERVICE_ID = "service_rstiw2j";
export const YOUR_TEMPLATE_ID = "template_a7p5a4g";
export const YOUR_USER_ID = "user_Qu1012yjaM4aIz9NTyp3h";

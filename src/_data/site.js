import { bullets, titleFn, descriptionFn, heroFn, heroSubFn } from "./page-data.js";
import CustomTShirtFaqs from "./tshirt_faqs.js";

const site = {
  "name": "imageonsd",
  "title": titleFn("Custom T-Shirt and Embroidery", "San Diego"),
  "description": descriptionFn("Custom T-Shirt and Embroidery", "San Diego"),
  "url": "http://localhost:8080",
  "logo": "https://imageonsd.com/assets/images/logo.png",
  "hero": heroFn("Custom T-Shirt <strong class=text-black>and</strong>&nbsp;Embroidery", "San Diego"),
  "heroSub": heroSubFn("Custom T-Shirt and Embroidery", "San Diego"),
  "heroCopy": bullets,
  "faq": CustomTShirtFaqs[0].replaceAll('[[city]]', 'San Diego'),
}

export default site;
import CustomTShirtFaqs from "./tshirt_faqs.js";
import EmbroideryFaqs from "./embroidery_faqs.js";

import { bullets, titleFn, descriptionFn, heroFn, heroSubFn } from "./page-data.js";

const allServices = [
  {
    "name": "Custom T-Shirts",
    "menuName": "T-Shirts",
    "faq": CustomTShirtFaqs[0],
  },
  {
    "name": "Embroidery",
    "menuName": "Embroidery",
    "faq": EmbroideryFaqs[0],
  },
  {
    "name": "Banners & Stickers",
    "menuName": "Banners",
    "faq": "",
  },
  {
    "name": "Engraving",
    "menuName": "Engraving",
    "faq": "",
  },
];

const serviceData = [];

for (let i = 0; i < allServices.length; i++) {
  serviceData.push({
    "name": allServices[i].name,
    "menuName": allServices[i].menuName,
    "title": titleFn("[[city]]", allServices[i].name, '| Personal & Business, Quality Guaranteed'),
    "description": descriptionFn(allServices[i].name, "[[city]]"),
    "hero": heroFn("[[city]]", allServices[i].name),
    "heroSub": heroSubFn("[[city]]", allServices[i].name),
    "heroCopy": bullets,
    "faq": allServices[i].faq,
  });
}

export default serviceData;
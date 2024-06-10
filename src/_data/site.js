import { bullets, titleFn, descriptionFn, heroFn, heroSubFn } from "./page-data.js";
import CustomTShirtFaqs from "./tshirt_faqs.js";
import project from "./project.js";

console.log(project);

const site = {
  "name": process.env.production ? "Image On" : "imageonsd",
  "title": titleFn("Custom T-Shirt and Embroidery", "San Diego"),
  "description": descriptionFn("Custom T-Shirt and Embroidery", "San Diego"),
  "url": "https://dev.imageonsd.com",
  "logo": "https://imageonsd.com/assets/images/logo.png",
  "hero": heroFn("Custom T-Shirt <strong class=text-black>and</strong>&nbsp;Embroidery", "San Diego"),
  "heroSub": heroSubFn("Custom T-Shirt and Embroidery", "San Diego"),
  "heroCopy": bullets,
  "faq": CustomTShirtFaqs[0].replaceAll('[[city]]', 'San Diego'),
}

export default site;
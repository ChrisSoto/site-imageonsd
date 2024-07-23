import { bullets, titleFn, descriptionFn, heroFn, heroSubFn, titleFn2 } from "./page-data.js";
import CustomTShirtFaqs from "./tshirt_faqs.js";
import project from "./project.js";

// don't add trailing slash

const site = {
  "name": process.env.production ? "Image On" : "imageonsd",
  "title": titleFn2("", "", ""),
  "description": descriptionFn("Get high-quality custom T-shirt printing and embroidery with no minimum orders, fast turnaround, and guaranteed quality. Enjoy price breaks on bulk orders. Everything is done in-house.", "San Diego"),
  "url": "https://imageonsd.com",
  "hero": heroFn("San Diego", "Custom T-Shirt <strong class=text-black><br>and</strong>&nbsp;Embroidery"),
  "heroSub": heroSubFn("San Diego", "Custom T-Shirt and Embroidery"),
  "heroCopy": bullets,
  "faq": CustomTShirtFaqs[0].replaceAll('[[city]]', 'San Diego'),
}

export default site;
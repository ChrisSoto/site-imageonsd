import { titleFn, titleFn2 } from "./page-data.js";
import CustomTShirtFaqs from "./tshirt_faqs.js";
import EmbroideryFaqs from "./embroidery_faqs.js";

const cityData = [
  {
    "name": "Downtown San Diego",
    "title": titleFn("Downtown San Diego", "Custom T-shirt Printing & Embroidery", "| No Minimums, Fast Turnaround"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53709.63270796312!2d-117.2049932429049!3d32.71655906408012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954a96c0fb307%3A0xa5419af040986a6e!2sDowntown%20San%20Diego%2C%20San%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1714164304092!5m2!1sen!2sus"
  },
  {
    "name": "Chula Vista",
    "title": titleFn("Chula Vista", "Custom T-shirt Printing & Embroidery", "| No Minimums, Fast Turnaround"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215042.7989465555!2d-117.18934040964692!3d32.63165880640078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94e4565c3aacf%3A0x46ccb8734b8f2bd3!2sChula%20Vista%2C%20CA!5e0!3m2!1sen!2sus!4v1714164382895!5m2!1sen!2sus",
    "copy": "test",
  },
  {
    "name": "Spring Valley",
    "title": titleFn("Spring Valley", "Custom T-shirt Printing & Embroidery", "| No Minimums, Fast Turnaround"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26850.93777748137!2d-116.9794295!3d32.72943839999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9508307ee4693%3A0xe952be3a6a076da!2sSpring%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1714152113393!5m2!1sen!2sus"
  },
  {
    "name": "Santee",
    "title": titleFn("Santee", "Custom T-shirt Printing & Embroidery", "| No Minimums, Fast Turnaround"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53623.55401405246!2d-117.02954852804555!3d32.85922567066912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbe2b37be990f1%3A0x59e59ff74d4604c8!2sSantee%2C%20CA!5e0!3m2!1sen!2sus!4v1714152202612!5m2!1sen!2sus"
  },
  {
    "name": "Rancho Bernardo",
    "title": titleFn("Rancho Bernardo", "Custom T-shirt Printing & Embroidery", "| No Minimums, Fast Turnaround"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53517.73751577269!2d-117.11978997610852!3d33.03385570215288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf12cd83c7fe9%3A0xf6b4d76751a17a60!2sRancho%20Bernardo%2C%20San%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1714152313478!5m2!1sen!2sus"
  },
  {
    "name": "Rancho San Diego",
    "title": titleFn("Rancho San Diego", "Custom T-shirt Printing & Embroidery", "| No Minimums, Fast Turnaround"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53683.02401517745!2d-116.96241002913422!3d32.76071918122504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95bca657c6739%3A0xc34158f4f95b75a2!2sRancho%20San%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1714152263779!5m2!1sen!2sus"
  },
  {
    "name": "Point Loma",
    "title": titleFn("Point Loma", "Custom T-shirt Printing & Embroidery", "| No Minimums, Fast Turnaround"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53712.1525622128!2d-117.25730862966749!3d32.71237433643496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80deab775f8640cb%3A0x895fe64d1627ddeb!2sPoint%20Loma%2C%20San%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1714152357508!5m2!1sen!2sus"
  },
  {
    "name": "Oceanside",
    "title": titleFn("Oceanside", "Custom T-shirt Printing & Embroidery", "| No Minimums, Fast Turnaround"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106801.53094938121!2d-117.40011447515326!3d33.22594827702302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc655e605b7705%3A0x19ecb3f398f9f87!2sOceanside%2C%20CA!5e0!3m2!1sen!2sus!4v1714152399573!5m2!1sen!2sus"
  },
  {
    "name": "Miramar",
    "title": titleFn("Miramar", "Custom T-shirt Printing & Embroidery", "| No Minimums, Fast Turnaround"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31913.575920578955!2d-117.15993567349598!3d32.88155686360628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbff46c8508605%3A0x5ed364ba62fed232!2sMiramar%2C%20San%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1714152478714!5m2!1sen!2sus"
  },
  {
    "name": "Lakeside",
    "title": titleFn2("Lakeside", "T-shirt Printing and Custom Embroidery Services", "| Hats Polos and More!"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53628.94770500196!2d-116.98774436869154!3d32.85030234526516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d958a39ef6648f%3A0xf47e2b6bbf978cd9!2sLakeside%2C%20CA!5e0!3m2!1sen!2sus!4v1714152529599!5m2!1sen!2sus"
  },
  {
    "name": "La Jolla",
    "title": titleFn("La Jolla", "Custom T-shirt Printing & Embroidery", "| No Minimums, Fast Turnaround"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107231.06308251042!2d-117.33114504112218!3d32.87249407573077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbd0764fcc0ecd%3A0xfce51ef45c1d3094!2sLa%20Jolla%2C%20San%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1714152590696!5m2!1sen!2sus"
  },
  {
    "name": "El Cajon",
    "title": titleFn("El Cajon", "Custom T-shirt Printing & Embroidery", "| No Minimums, Fast Turnaround"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40105.66664328094!2d-116.98564814234346!3d32.80141248721498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d959b17b098363%3A0xaf79d6ad60c2763!2sEl%20Cajon%2C%20CA!5e0!3m2!1sen!2sus!4v1714152647293!5m2!1sen!2sus"
  },
  {
    "name": "Carmel Mountain",
    "title": titleFn("Carmel Mountain", "Custom T-shirt Printing & Embroidery", "| No Minimums, Fast Turnaround"),
    "description": "San Diego, CA",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16683.342113757877!2d-117.08966180779278!3d32.979398956486804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfa025e72f11d%3A0xaadd82acb6a410aa!2sCarmel%20Mountain%20Ranch%2C%20San%20Diego%2C%20CA%2092128!5e0!3m2!1sen!2sus!4v1714152729097!5m2!1sen!2sus"
  }
]

for (let i = 0; i < cityData.length; i++) {
  cityData[i].faq = {
    'Custom T-Shirts': CustomTShirtFaqs[i],
    'Embroidery': EmbroideryFaqs[i],
    'Banners & Stickers': CustomTShirtFaqs[0],
    'Engraving': CustomTShirtFaqs[0],
  }
}

export default cityData;
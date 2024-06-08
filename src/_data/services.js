import CustomTShirtFaqs from "./tshirt_faqs.js";

const bullets = `
<ul>
  <li>Everything Done <b class='text-red-500'>In-House</b></li>
  <li>Price Breaks on <b class='text-red-500'>Bulk Orders</b></li>
  <li><b class='text-red-500'>No</b> Minimums</li>
  <li>Quality <b class='text-red-500'>Guaranteed</b></li>
  <li><b class='text-red-500'>Fast</b> Turnaround</li>
</ul>`;

const allServices = [
  {
    "name": "Custom T-Shirts",
    "menuName": "T-Shirts",
  },
  {
    "name": "Embroidery",
    "menuName": "Embroidery",
  },
  {
    "name": "Banners & Stickers",
    "menuName": "Banners",
  },
  {
    "name": "Engraving",
    "menuName": "Engraving",
  },
];



const services = [];

for (let i = 0; i < allServices.length; i++) {
  services.push({
    "name": allServices[i].name,
    "menuName": allServices[i].menuName,
    "title": "[[city]] " + allServices[i].name + " Services",
    "description": "Quality " + allServices[i].name + " near [[city]]. <b>Personalize</b> your apparel with no minimum order requirements and enjoy great discounts on bulk purchases. Visit our store today!",
    "hero": "[[city]] " + allServices[i].name + " Service Shop",
    "heroSub": "Dial us or swing by our [[city]] Store for Custom T-Shirt Printing & Embroidery Services.",
    "heroCopy": bullets,
    "faq": CustomTShirtFaqs[0],
  });
}

export default services;
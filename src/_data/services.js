const allServices = ["Custom T-Shirts", "Embroidery"];

const bullets = `- Everything Done In-House
- Price Breaks on Bulk Orders
- No Minimums
- Quality Guaranteed
- Fast Turnaround`;

const services = [];

for (let i = 0; i < allServices.length; i++) {
  services.push({
    "name": allServices[i],
    "description": "Quality " + allServices[i] + " near [[city]]. <b>Personalize</b> your apparel with no minimum order requirements and enjoy great discounts on bulk purchases. Visit our store today!",
    "hero": "[[city]] " + allServices[i] + " Service Shop",
    "heroSub": "Dial us or swing by our [[city]] Store for Custom T-Shirt Printing & Embroidery Services.",
    "heroCopy": bullets,
  });
}

export default services;



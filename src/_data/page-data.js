const name = "";
const url = "http://localhost:8080";
const logo = "https://imageonsd.com/assets/images/logo.png";
const bgImage = "https://imageonsd.com/assets/images/hero.png";
const bullets = `
<ul>
  <li>Everything Done <b class='text-red-500'>In-House</b></li>
  <li>Price Breaks on <b class='text-red-500'>Bulk Orders</b></li>
  <li><b class='text-red-500'>No</b> Minimums</li>
  <li>Quality <b class='text-red-500'>Guaranteed</b></li>
  <li><b class='text-red-500'>Fast</b> Turnaround</li>
</ul>`;

const titleFn = (cityData, serviceData, textData) => {
  let text = textData || '| No Minimums, Fast Turnaround';
  let service = serviceData || 'Custom T-Shirt and Embroidery';
  let city = cityData || 'San Diego';
  return city + " " + service + " " + text;
}

const titleFn2 = (cityData, serviceData, textData) => {
  if (serviceData === 'Embroidery') {
    serviceData = 'Custom Embroidery Services';
  }
  if (serviceData === 'Custom T-Shirts') {
    serviceData = 'T-shirt Printing';
  }
  let service = serviceData || 'T-shirt Printing and Custom Embroidery Services';
  let city = cityData || 'San Diego';
  let text = textData || '| Hats Polos and More!';
  return service + " " + city + " " + text;
}

const descriptionFn = (serviceData, cityData) => {
  let service = serviceData || 'Custom T-Shirt and Embroidery Services';
  let city = cityData || 'San Diego';
  return "Quality " + service + " near " + city + ". Personalize your apparel with no minimum order requirements and enjoy great discounts on bulk purchases. Visit our store today!";
}

const heroFn = (cityData, serviceData, textData) => {
  let service = serviceData || 'Custom T-Shirt <strong class=text-black><br>and</strong>&nbsp;Embroidery';
  let city = cityData || 'San Diego';
  let text = textData || 'Service Shop';
  return city + "<br><strong class='text-red-500'>" + service + "</strong><br>" + " " + text;
}

const heroSubFn = (cityData, serviceData) => {
  let service = serviceData || 'Custom T-Shirt and Embroidery Services';
  let city = cityData || 'San Diego';
  return "Dial us or swing by our " + city + " Store for " + service + " Services.";
}

export { name, url, logo, titleFn, titleFn2, descriptionFn, heroFn, heroSubFn, bgImage, bullets };
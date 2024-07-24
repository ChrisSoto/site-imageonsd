import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import CleanCSS from 'clean-css';

import cityData from './src/_data/city-data.js';
import serviceData from './src/_data/service-data.js';
import { bullets, heroFn, heroSubFn, titleFn, titleFn2 } from "./src/_data/page-data.js";

function checkFaq(faq) {

}

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["webp"],
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });

  eleventyConfig.addGlobalData("cityServices", () => {
    let data = [];

    for (let i = 0; i < serviceData.length; i++) {
      for (let j = 0; j < cityData.length; j++) {

        let cityService = {};

        let city = cityData[j].name
        let name = serviceData[i].name
        let title = titleFn(cityData[j].name, serviceData[i].name, '| No Minimums, Fast Turnaround')

        switch (cityData[j].name) {
          case 'Lakeside':
            title = 'T-shirt Printing and Custom Embroidery Lakeside | Hats Polos and More!';
            break;

          case 'Chula Vista':
            title = 'Chula Vista T-shirt Printing and Custom Embroidery | Hats Polos and More!';
            break;

          default:
            break;
        }

        let description = serviceData[i].description.replace("[[city]]", cityData[j].name)
        let hero = serviceData[i].hero.replace("[[city]]", cityData[j].name)
        let heroSub = serviceData[i].heroSub.replace("[[city]]", cityData[j].name)
        let heroCopy = serviceData[i].heroCopy
        let faq = cityData[j].faq[serviceData[i].name].replaceAll("[[city]]", cityData[j].name)
        let map = cityData[j].map

        cityService = {
          city, name, title, description, hero, heroSub, heroCopy, faq, map
        };

        data.push(cityService);
      }
    }
    return data;
  });

  eleventyConfig.addGlobalData("services", () => {
    let data = [];

    const city = "San Diego";

    for (let i = 0; i < serviceData.length; i++) {
      console.log(serviceData[i].name);
      let servData = {
        city: city,
        name: serviceData[i].name,
        menuName: serviceData[i].menuName,
        title: serviceData[i].title.replace("[[city]]", city),
        description: serviceData[i].description.replace("[[city]]", city),
        hero: serviceData[i].hero.replace("[[city]]", city),
        heroSub: serviceData[i].heroSub.replace("[[city]]", city),
        heroCopy: serviceData[i].heroCopy,
        faq: serviceData[i].faq.replaceAll("[[city]]", city),
      };
      data.push(servData);
    }

    return data;
  });

  eleventyConfig.addGlobalData("cities", () => {
    let data = [];

    for (let i = 0; i < cityData.length; i++) {
      let servData = {
        name: cityData[i].name,
        title: cityData[i].title.replace("[[city]]", cityData[i].name),
        description: cityData[i].description.replace("[[city]]", cityData[i].name),
        hero: heroFn(cityData[i].name, null, null),
        heroSub: heroSubFn(cityData[i].name, null),
        heroCopy: bullets,
        faq: cityData[i].faq['Custom T-Shirts'].replaceAll("[[city]]", cityData[i].name),
      };
      data.push(servData);
    }

    return data;
  });

  eleventyConfig.addPassthroughCopy({
    "global.out.css": "global.css",
  });

  eleventyConfig.addPassthroughCopy("src/_assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/.htaccess");

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
};

export const config = {
  dir: {
    input: "src",
    output: "dist"
  }
};
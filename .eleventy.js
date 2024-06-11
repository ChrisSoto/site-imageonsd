import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

import CleanCSS from 'clean-css';

import cityData from './src/_data/city-data.js';
import serviceData from './src/_data/service-data.js';
import { bullets, heroFn, heroSubFn, titleFn } from "./src/_data/page-data.js";

const mdOptions = {
  html: true,
};

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
        let cityService = {
          city: cityData[j].name,
          name: serviceData[i].name,
          title: titleFn(cityData[j].name, serviceData[i].name, '| Custom Designs, Quality Guaranteed, Fast Turnaround'),
          description: serviceData[i].description.replace("[[city]]", cityData[j].name),
          hero: serviceData[i].hero.replace("[[city]]", cityData[j].name),
          heroSub: serviceData[i].heroSub.replace("[[city]]", cityData[j].name),
          heroCopy: serviceData[i].heroCopy,
          faq: cityData[j].faq.replaceAll("[[city]]", cityData[j].name),
          map: cityData[j].map
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
        faq: cityData[i].faq.replaceAll("[[city]]", cityData[i].name),
      };
      data.push(servData);
    }
    
    return data;
  });

  eleventyConfig.addPassthroughCopy({
    "global.out.css": "global.css",
  });

  eleventyConfig.addPassthroughCopy("src/_assets");

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
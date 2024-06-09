import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import CleanCSS from 'clean-css';

import cities from './src/_data/cities.js';
import serviceData from './src/_data/service-data.js';

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
      for (let j = 0; j < cities.length; j++) {
        let cityService = {
          city: cities[j].name,
          name: serviceData[i].name,
          title: serviceData[i].title.replace("[[city]]", cities[j].name),
          description: serviceData[i].description.replace("[[city]]", cities[j].name),
          hero: serviceData[i].hero.replace("[[city]]", cities[j].name),
          heroSub: serviceData[i].heroSub.replace("[[city]]", cities[j].name),
          heroCopy: serviceData[i].heroCopy.replace("[[city]]", cities[j].name),
          faq: cities[j].faq.replaceAll("[[city]]", cities[j].name),
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
        heroCopy: serviceData[i].heroCopy.replace("[[city]]", city),
        faq: serviceData[i].faq.replaceAll("[[city]]", city),
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
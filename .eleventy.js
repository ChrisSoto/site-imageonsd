import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import CleanCSS from 'clean-css';

import cities from './src/_data/cities.js';
import services from './src/_data/services.js';

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

    for (let i = 0; i < services.length; i++) {
      for (let j = 0; j < cities.length; j++) {
        let cityService = {
          city: cities[j].name,
          name: services[i].name,
          title: services[i].title.replace("[[city]]", cities[j].name),
          description: services[i].description.replace("[[city]]", cities[j].name),
          hero: services[i].hero.replace("[[city]]", cities[j].name),
          heroSub: services[i].heroSub.replace("[[city]]", cities[j].name),
          heroCopy: services[i].heroCopy.replace("[[city]]", cities[j].name),
          faq: cities[j].faq.replace("[[city]]", cities[j].name),
        };
        data.push(cityService);
      }
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
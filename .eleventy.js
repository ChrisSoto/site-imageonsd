import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin, Image } from "@11ty/eleventy-img";
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
          name: services[i].name,
          title: services[i].title.replace("[[city]]", cities[j].name),
          description: services[i].description.replace("[[city]]", cities[j].name),
          city: cities[j].name
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
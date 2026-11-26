export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/australia");
  eleventyConfig.addPassthroughCopy("src/style.css");
  return { dir: { input: "src", output: "_site" }, markdownTemplateEngine: false };
}

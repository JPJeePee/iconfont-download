const fs = require("fs"),
  svg2img = require("svg2img"),
  config = require("../iconfont.config.json"),
  fetch = require("./fetch"),
  parse = require("./parse");

const saveDir = config.save_dir || ".";
const size = config.size || 100;
const excludes = config.excludes || [];

if (config.symbol_url) {
  const fetchXml = fetch.fetchXml(`https:${config.symbol_url}`);
  fetchXml.then(xml => {
    if (xml && xml.svg && Array.isArray(xml.svg.symbol)) {
      xml.svg.symbol.forEach(symbol => {
        const svgName = symbol.$.id;
        if (!excludes.includes(svgName)) {
          svg2img(parse.obj2svg(symbol, size), (error, buffer) => {
            fs.writeFileSync(`${saveDir}/${svgName}.png`, buffer);
          });
        }
      });
    }
  });
} else {
  throw new Error("missing symbol_url.");
}

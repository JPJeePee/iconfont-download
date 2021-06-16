const obj2svg = (obj, size) => {
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="${
    obj.$.viewBox
  }" width="${size}" height="${size}">
    ${obj.path.reduce((pathString, item) => {
      const pathItem = `<path
        ${Object.keys(item.$).reduce((propString, prop) => {
          const propItem = `${prop}="${item.$[prop]}" `;
          return propString + propItem;
        }, "")}
      >
      </path>`;
      return pathString + pathItem;
    }, "")}
  </svg>`;
  return svgString;
};

const parse = {
  obj2svg,
};

module.exports = parse;

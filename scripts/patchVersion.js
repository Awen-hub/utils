const {
  version
} = require("../package.json");

const versionList = version.split(".");
versionList[2] = Number(versionList[2]) + 1;
const newVersion = versionList.join(".");
console.log(newVersion);
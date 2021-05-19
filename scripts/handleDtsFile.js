const fs = require("fs");
const getDtsFileList = (rootPath, dtsList) => {
  const files = fs.readdirSync(rootPath);
  files.forEach((fileName) => {
    const filePath = rootPath + fileName;
    const file = fs.statSync(filePath);
    if (file.isDirectory()) {
      getDtsFileList(filePath + "/", dtsList);
    } else {
      dtsList.push(filePath);
    }
  });
};
const deleteFile = (fileName) => {
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
  }
};
const dstFileList = [];
getDtsFileList("./lib/", dstFileList);
const genDtsFile = (outFileList, originList) => {
  originList.forEach((file) => {
    if (/(d.ts)$/.test(file)) {
      outFileList.forEach((outFileName) => {
        fs.appendFileSync(outFileName, fs.readFileSync(file));
      });
    }
  });
};
deleteFile("./esm/index.d.ts");
deleteFile("./cjs/index.d.ts");
genDtsFile(["./esm/index.d.ts", "./cjs/index.d.ts"], dstFileList);
dstFileList.forEach((fileName) => {
  if (/(d.ts)$/.test(fileName) || /(.js)$/.test(fileName)) {
    deleteFile(fileName);
  }
});

module.exports = {
  deleteFile,
  getDtsFileList,
};

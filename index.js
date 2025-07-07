const fs = require("fs");
const path = require("path");

class AoiGit {
  constructor(bot) {
    if (!bot || !bot.functionManager) {
      throw new Error("[@aoijs/aoi.git]: Invalid application or absence of functionManager!");
    }

    const functionsPath = path.join(__dirname, "functions");

    for (const file of fs.readdirSync(functionsPath)) {
      const func = require(path.join(functionsPath, file));
      bot.functionManager.createFunction(func);
    }

    console.log("[@aoijs/aoi.git]: All git functions have been loaded.");
  }
}

module.exports = { AoiGit };

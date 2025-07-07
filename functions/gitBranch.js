const { exec } = require("child_process");

module.exports = {
  name: "$gitBranch",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git branch`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `🌿 Branch atual.`;
    return { code: d.util.setCode(data) };
  }
};

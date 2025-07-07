const { exec } = require("child_process");

module.exports = {
  name: "$gitPull",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git pull`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `📥 Pull realizado.`;
    return { code: d.util.setCode(data) };
  }
};

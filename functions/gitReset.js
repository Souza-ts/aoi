const { exec } = require("child_process");

module.exports = {
  name: "$gitReset",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git reset ${args}`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `♻️ Reset executado.`;
    return { code: d.util.setCode(data) };
  }
};

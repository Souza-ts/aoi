const { exec } = require("child_process");

module.exports = {
  name: "$gitLog",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git log --oneline -n 5`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `📜 Últimos commits.`;
    return { code: d.util.setCode(data) };
  }
};

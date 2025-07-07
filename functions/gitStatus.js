const { exec } = require("child_process");

module.exports = {
  name: "$gitStatus",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git status`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `📋 Status do repositório.`;
    return { code: d.util.setCode(data) };
  }
};

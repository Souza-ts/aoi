const { exec } = require("child_process");

module.exports = {
  name: "$gitCommit",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git commit -m "${args}"`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `📝 Commit feito.`;
    return { code: d.util.setCode(data) };
  }
};

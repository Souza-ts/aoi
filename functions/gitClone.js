const { exec } = require("child_process");

module.exports = {
  name: "$gitClone",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git clone ${args}`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `📦 Repositório clonado.`;
    return { code: d.util.setCode(data) };
  }
};

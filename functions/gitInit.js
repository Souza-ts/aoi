const { exec } = require("child_process");

module.exports = {
  name: "$gitInit",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git init`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `✅ Repositório Git iniciado.`;
    return { code: d.util.setCode(data) };
  }
};

const { exec } = require("child_process");

module.exports = {
  name: "$gitConfig",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git config ${args}`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `⚙️ Configuração aplicada.`;
    return { code: d.util.setCode(data) };
  }
};

const { exec } = require("child_process");

module.exports = {
  name: "$gitRemote",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git remote ${args}`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `🌐 Comando de remote executado.`;
    return { code: d.util.setCode(data) };
  }
};

const { exec } = require("child_process");

module.exports = {
  name: "$gitAdd",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git add ${args}`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `➕ Arquivo(s) adicionado(s).`;
    return { code: d.util.setCode(data) };
  }
};

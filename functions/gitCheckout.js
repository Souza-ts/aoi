const { exec } = require("child_process");

module.exports = {
  name: "$gitCheckout",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git checkout ${args}`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `🔀 Branch trocado.`;
    return { code: d.util.setCode(data) };
  }
};

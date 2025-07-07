const { exec } = require("child_process");

module.exports = {
  name: "$gitPush",
  type: "function",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [args = ""] = data.inside.splits;

    exec(`git add . && git commit -m "${args}" && git push`, (err, stdout, stderr) => {
      if (err) console.error(stderr);
    });

    data.result = `📤 Push com commit realizado.`;
    return { code: d.util.setCode(data) };
  }
};

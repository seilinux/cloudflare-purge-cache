const core = require("@actions/core");
const cloudflare = require("cloudflare");

const getAuthenticationType = require("./controllers/AuthenticationsController");

core.getInput = (name) => {
  const inputs = {
    token: "",
    email: "",
    key: "key",
  };
  return inputs[name] || "";
};

function main() {
  getAuthenticationType();
}

main();

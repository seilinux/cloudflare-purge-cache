const core = require("@actions/core");
const cloudflare = require("cloudflare");

const getAuthenticationType = require("./controllers/AuthenticationsController");

function main() {
  getAuthenticationType();
}

main();

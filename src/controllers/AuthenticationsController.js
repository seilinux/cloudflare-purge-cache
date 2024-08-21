const core = require("@actions/core");

function getAuthenticationType() {
  try {
    const api_token = core.getInput("api_token");
    const email = core.getInput("email");
    const key = core.getInput("key");

    if (api_token.length || (email.length && key.length)) {
      return;
    } else {
      throw new Error("You must provide a api_token or email and key");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = getAuthenticationType;

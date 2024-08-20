const core = require("@actions/core");

function getAuthenticationType() {
  try {
    const token = core.getInput("token");
    const email = core.getInput("email");
    const key = core.getInput("key");

    if (token.length || (email.length && key.length)) {
      return;
    } else {
      throw new Error("You must provide a token or email and key");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = getAuthenticationType;

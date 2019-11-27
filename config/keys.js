const isDev = process.env.NODE_ENV !== "production";
let keys = null;
if (isDev) {
  keys = require("./dev");
} else {
  keys = require("./prod");
}

module.exports = keys;

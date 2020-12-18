const { dirname } = require("path");
const path = require("path");
require("dotenv").config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    useFileSystemPublicRoutes: false,
  },

  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");

    return config;
  },
};

"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true,
  webpack: function webpack(config, _ref) {
    var dev = _ref.dev;
    // modify it!
    return config;
  }
};
module.exports = nextConfig;
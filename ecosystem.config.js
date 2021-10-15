module.exports = {
  apps: [{
    name: "evobot_dw",
    script: "./index.js",
    cron_restart: "0 4 * * *",
    max_memory_restart: "250M",
    exec_mode: "fork",
    ignore_watch: ["node_modules"],
    watch: false,
    env: {
      NODE_ENV: "production"
    },
  }]
}
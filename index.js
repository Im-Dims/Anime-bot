console.log("Memulai ...")

import yargs from "yargs"
import cfonts from "cfonts"
import { fileURLToPath } from "url"
import { join, dirname } from "path"
import { createRequire } from "module"
import { createInterface } from "readline"
import { setupMaster, fork } from "cluster"
import { watchFile, unwatchFile } from "fs"


import express from "express"
import monitor from "express-status-monitor"
const app = new express()


const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) 
const { name, author } = require(join(__dirname, "./package.json")) 

say("Anime Botz", {
  font: "shade",
  align: "center",
  colors: ["red", "yellow"]
})
say("Bot By Dims", {
  font: "console",
  align: "center",
  colors: ["green"]
})

var isRunning = false

function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
  say([process.argv[0], ...args].join(" "), {
    font: "console",
    align: "center",
    colors: ["magenta"]
  })
  say("Memuat Source ...", {
    font: "console",
    align: "center",
    colors: ["red"]
  })
  say("Memuat Plugins ...", {
    font: "console",
    align: "center",
    colors: ["yellow"]
  })
  say("Done ><", {
    font: "console",
    align: "center",
    colors: ["green"]
  })
  setupMaster({
    exec: args[0],
    args: args.slice(1),
  })
  let p = fork()
  p.on("message", data => {
    console.log("[RECEIVED]", data)
    switch (data) {
      case "reset":
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case "uptime":
        p.send(process.uptime())
        break
    }
  })
  p.on("exit", (_, code) => {
    isRunning = false
    console.error("[❗]Exited with code:", code)
    if (code !== 0) return start(file)
    watchFile(args[0], () => {
      unwatchFile(args[0])
      start(file)
    })
  })
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts["test"])
    if (!rl.listenerCount()) rl.on("line", line => {
      p.emit("message", line.trim())
    })

}

start("main.js")
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/home.html")
})
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/html/home.html")
})
app.get("/game", (req, res) => {
  res.sendFile(__dirname + "/html/game.html")
})
app.get("/chat", (req, res) => {
  res.sendFile(__dirname + "/html/chat.html")
})
app.get("/tools", (req, res) => {
  res.sendFile(__dirname + "/html/tools.html")
})
app.get("/music", (req, res) => {
  res.sendFile(__dirname + "/html/music.html")
})
app.get("/views", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})
app.get("/*", (req, res) => {
  res.send({ error: "Endpoint: home, game, chat, tools, music" })
})
app.listen(5000, () => {
  console.log("Bot sukses tersambung")
})
app.set("json spaces", 1); 
app.use(monitor())
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SafeW记账机器人运行中...");
});

app.post("/webhook", (req, res) => {
  console.log("收到消息：", req.body);

  res.status(200).send("ok");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`机器人启动成功：${PORT}`);
});

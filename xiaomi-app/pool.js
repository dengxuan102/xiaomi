// 创建连接池

const mysql = require("mysql");
var pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "xiaomi",
  connectionLimit: 5
});

// 导出创建好的连接池
module.exports = pool;

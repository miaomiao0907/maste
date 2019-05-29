const express = require('express');
const express = Router();
const app = express()
    // 备注该行代码，加以解释；
app.get('/', (req, res) => {
    res.send('欢迎来到/页面');
});
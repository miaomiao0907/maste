const express = require('express');
const express = Router();
const app = express()

app.get('/', (req, res) => {
    res.send('欢迎来到/页面');
});
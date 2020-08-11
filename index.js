const express = require('express')
const app = express()
const port = 3000

// mongoDB 연결
// 터미널 : npm install mongoose --save
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyoo:hyoo.@boilerplate.xszy4.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // --> 안쓰면 에러가 나올 수 있기 때문에 꼭 써줘야함!
}).then(()   => console.log('MongoDB Connected...'))
  .catch(err => console.log('err: ' + err))

app.get('/', (req, res) => res.send('Hello World! node.js !! 안녕하세요 ')) 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))






// schema 작성
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true // 스페이스 공백을 없애주는 역할
    },
    password : {
        type : String,
        maxlength : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,

    // 유효성 관리
    token : {
        type : String
    },
    // 토큰을 사용할 수 있는 기간 (유효기간)
    tokenExp : {
        type : Number
    }
})

const User = mongoose.model('User', userSchema)

// 다른 파일에서도 쓸 수 있게 사용하는 방법
module.exports  = { User }
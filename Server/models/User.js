const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const saltRounds = 10
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    id : {
        type : String,
        required : true,
        unique:true
    },
    birthday : {
        type : String,
        required : true
    },
    nickname : {
        type : String,
        required : true,
        unique : true
    },
    phonenumber : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required : true
    },
    confirmpasswords : {
        type : String,
        required : true,
    },
    token: {
        type: String
    }
});

userSchema.pre('save',function(next){
    var user = this;
    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err,salt){
            if(err) return next(err)
            bcrypt.hash(user.password,salt,function(err,hash){
                if (err) return next(err)
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
})

userSchema.methods.comparePassword = function(plainPassword,cb) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch)
    })
}
userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    jwt.verify(token, 'secretToken', function(err, decoded) {
        //id를 이용해 user를 찾고 client의 token과 db에 저장된 token이 같은지 확인하기
        user.findOne({"_id": decoded, "token": token}, function(err, user) {
            if(err) return cb(err);
            cb(null, user)
        })
    })
}
userSchema.methods.generateToken = function(cb){
    var user = this;
    // token 생성하기
    var token = jwt.sign(user._id.toHexString(),'secretToken')
    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    })

}

const User = mongoose.model('User', userSchema);
module.exports = {User};

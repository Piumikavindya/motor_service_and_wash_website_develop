const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator')
const Schema = mongoose.Schema;
 

const userSchema = new Schema({
 accountId: {
    type: String,
    
    unique: true,
  },
  firstname:{
    type: String,
    required: true,
    
  }, 
  lastname:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true, // Ensure uniqueness
    required: true,

  }, 
  password:{
    type: String,
    required: true,
  },   
});

// static signup method

userSchema.statics.signup = async function(email,password,lastname,firstname,accountId) {
    //validation
    if(!email || !password || !lastname || !firstname) {
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }
    const salt =await bcrypt.genSalt(10)
    const hash =await bcrypt.hash(password,salt)
    const user=await this.create({email,password:hash,firstname,lastname,accountId})
    return user
}  

// static login method
userSchema.statics.login = async function(email,password,accountId){
    if(!email || !password || !accountId ) {
        throw Error('All fields must be filled')
    }  
    const user = await this.findOne({email})
    if(!user){
        throw Error('Incorrect Email')
    }
    const account = await this.findOne({accountId})
    if(!account){
        throw Error('Incorrect Account ID')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error("Incorrect password")
    }
    return user
}



module.exports = mongoose.model('User', userSchema);
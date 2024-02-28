const mongoose = require('mongoose');
const bcrypt =require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema;
 

const customerSchema = new Schema({
 
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

customerSchema.statics.signup = async function(email,password,lastname,firstname) {
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
    const customer =await this.create({email,password:hash,firstname,lastname})
    return customer
}  

// static login method
customerSchema.statics.login = async function(email,password){
    if(!email || !password ) {
        throw Error('All fields must be filled')
    }  
    const customer = await this.findOne({email})
    if(!customer){
        throw Error('Incorrect Email')
    }
    const match = await bcrypt.compare(password,customer.password)
    if(!match){
        throw Error("Incorrect password")
    }
    return customer
}


module.exports = mongoose.model('Customer', customerSchema);
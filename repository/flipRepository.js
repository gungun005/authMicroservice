if(process.env.NODE_ENV !== 'production'){
    const dotenv = require('dotenv').config({path : `${__dirname}/../.env`});
}

const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const bcrypt = require('bcryptjs');
//const { resolve } = require('promise');

const client = new MongoClient(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true 
});

const getFlipRegisters=async(body)=>{
console.log("in repo");
console.log(body);
console.log("Hi ! I m getting registered users");
try{
    await client.connect()
    const db = client.db("authMicro");
    const coll = db.collection("authMicro");
    const data = await coll.find().toArray()
    console.log(data)
    return data
}
catch(err){
    console.log("Error occurred")
    return err;
}
finally{
    await client.close()
} 
};
const postFlipRegisters=async(body)=>{
console.log("in repo");
console.log(body);
console.log("Here u can post users who want to register");
const bcrypt = require('bcryptjs');
const saltRounds = 5;
const hashedPassword = await bcrypt.hash(body.password, saltRounds);
var item = {
    name: body.name,
    email:body.email,
    password:hashedPassword,
};
// console.log("EMAIL ENTERED BY USER",body.email);
// console.log("PASSWORD",body.password);
console.log("password entered by user during registration",body.password);
console.log("Hashed Password during Registration:", hashedPassword);
try{
    await client.connect()
    const db = client.db("authMicro");
    const coll = db.collection("authMicro");
    const data = await coll.insertOne(item);
    // const data2 = await coll.find().toArray();
    console.log(data);
    return data.acknowledged == true
}
catch(err){
    console.log("Error occurred")
    return err;
}
finally{
    await client.close()
} 
};
    
const getFlipLogin=async(body)=>{
console.log("in repo");
console.log(body);
console.log("getting the logged in users");
try{
    await client.connect()
    const db = client.db("authMicro");
    const coll = db.collection("authMicro");
    const data = await coll.find().toArray()
    console.log(data)
    return data
}
catch(err){
    console.log("Error occurred")
    return err;
}
finally{
    await client.close()
} 
};
const postFlipLogin=async(body)=>{
console.log("in rep");
console.log(body);
console.log("posting  logged user");
var item = {
    email: body.email,
    password:body.password,
};
try{
    await client.connect()
    const db = client.db("authMicro");
    const coll = db.collection("authMicro");
    const bcrypt=require('bcryptjs');
    // const data = await coll.insertOne(item);
    // const data2 = await coll.find().toArray();
    // console.log(data)
    const foundUser = await coll.findOne({ email: body.email });
    if (foundUser) {
        console.log("Found user password",foundUser.password);
        // const enteredPasswordHash = await bcrypt.hash(body.password, 5);
        // console.log("Hashed Entered Password during Login:", enteredPasswordHash);
        const passwordMatches = await bcrypt.compare(body.password, foundUser.password);
        if (passwordMatches) {
            console.log("Password matches. User found");
            return true;
        } else {
            console.log("Password does not match");
            return false;
        }
    } else {
        console.log("User not found");
        return false;
    }
    // return data.acknowledged == true

}
catch(err){
    console.log("Error occurred",err);
    return err;
}
finally{
    await client.close()
} 

};
    
const getFlipFpsswrdUser=async(body)=>{
console.log("in repo");
console.log(body);    
console.log("getting the logged in forgot password users");
try{
    await client.connect()
    const db = client.db("authMicro");
    const coll = db.collection("authMicro");
    const data = await coll.find().toArray()
    console.log(data)
    return data
}
catch(err){
    console.log("Error occurred")
    return err;
}
finally{
    await client.close()
} 
};
const patchFlipFpsswrdUser=async(body)=>{
console.log("in repo");
console.log(body);
console.log("any changes by logging user who forgot password");
var item = {
    firstname: body.firstname,
    password:body.password,
    newpassword:body.newpassword,
};
try{
    await client.connect()
    const db = client.db("authMicro");
    const coll = db.collection("authMicro");
    const data = await coll.insertOne(item);
    // const data2 = await coll.find().toArray();
    console.log(data)
    return data.acknowledged == true
}
catch(err){
    console.log("Error occurred")
    return err;
}
finally{
    await client.close()
} 
};
    
const getFlipCpsswrdUser=async(body)=>{
console.log("in repo");
console.log(body);
console.log("getting the flip change password user");
try{
    await client.connect()
    const db = client.db("authMicro");
    const coll = db.collection("authMicro");
    const data = await coll.find().toArray()
    console.log(data)
    return data
}
catch(err){
    console.log("Error occurred")
    return err;
}
finally{
    await client.close()
} 
};
const postFlipCpsswrdUser=async(body)=>{
console.log("in repo");
console.log(body);   
console.log("post flip change pssword user ");
var item = {
    firstname: body.firstname,
    password:body.password,
    changepassword:body.newpassword,
};
try{
    await client.connect()
    const db = client.db("authMicro");
    const coll = db.collection("authMicro");
    const data = await coll.insertOne(item);
    // const data2 = await coll.find().toArray();
    console.log(data)
    return data.acknowledged == true
}
catch(err){
    console.log("Error occurred")
    return err;
}
finally{
    await client.close()
} 
};
        
const delFlipUser=async(body)=>{
console.log("in repo");
console.log(body);
console.log("user deleted!");
let searchOptions = {};
if(body.firstname != null && body.firstname !== ""){
    searchOptions.firstname = body.firstname;
}
try{
    await client.connect()
    const db = client.db("authMicro");
    const coll = db.collection("authMicro");
    const data = await coll.deleteOne(searchOptions)
    console.log(data)
}
catch(err){
    console.log("Error occurred")
    return err;
}
finally{
    await client.close()
} 

};
    module.exports={
        getFlipRegisters,
        postFlipRegisters,
        getFlipLogin,
        postFlipLogin,
        getFlipFpsswrdUser,
        patchFlipFpsswrdUser,
        getFlipCpsswrdUser,
        postFlipCpsswrdUser,
        delFlipUser
    };
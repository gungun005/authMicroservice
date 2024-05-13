const flipService=require('../services/flipService');
const getFlipRegisters=async (req,res)=>{
console.log("in controller");
console.log(req.body);
let getFlipRegisters=await flipService.getFlipRegisters(req.body);
res.send(getFlipRegisters);
};
const postFlipRegisters=(req,res)=>{
console.log(req.body);
let postFlipRegisters=flipService.postFlipRegisters(req.body);
res.send(postFlipRegisters);
};

const getFlipLogin=(req,res)=>{
console.log(req.body);
let getFlipLogin=flipService.getFlipLogin(req.body);
res.send(getFlipLogin);
};
const postFlipLogin=(req,res)=>{
console.log(req.body);
let postFlipLogin=flipService.postFlipLogin(req.body);
res.send(postFlipLogin);
};

const getFlipFpsswrdUser=(req,res)=>{
console.log(req.body);
let getFlipFpsswrdUser=flipService.getFlipFpsswrdUser(req.body);
res.send(getFlipFpsswrdUser);
};
const patchFlipFpsswrdUser=(req,res)=>{
console.log(req.body);
let postFlipFpsswrdUser=flipService.patchFlipFpsswrdUser(req.body);
res.send(postFlipFpsswrdUser);
};

const getFlipCpsswrdUser=(req,res)=>{
console.log(req.body);
let getFlipCpsswrdUser=flipService.getFlipCpsswrdUser(req.body);
res.send(getFlipCpsswrdUser);
};
const postFlipCpsswrdUser=(req,res)=>{
console.log(req.body);
let postFlipCpsswrdUser=flipService.postFlipCpsswrdUser(req.body);
res.send(postFlipCpsswrdUser);
};
    
const delFlipUser=(req,res)=>{
console.log(req.body);
let delFlipUser=flipService.delFlipUser(req.body);
res.send(delFlipUser);
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
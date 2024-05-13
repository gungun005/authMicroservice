const flipRepository=require('../repository/flipRepository');

const getFlipRegisters=(body)=>{
console.log("in services");
console.log(body);
let getFlipRegisters=flipRepository.getFlipRegisters(body);
return(getFlipRegisters);
};
const postFlipRegisters=(body)=>{
console.log("in services");
console.log(body);
let postFlipRegisters=flipRepository.postFlipRegisters(body);
return(postFlipRegisters);
};
    
const getFlipLogin=(body)=>{
console.log("in services");
console.log(body);
let  getFlipLogin=flipRepository.getFlipLogin(body);
return( getFlipLogin);
};
const postFlipLogin=(body)=>{
console.log("in services");
console.log(body);
let postFlipLogin=flipRepository.postFlipLogin(body);
return(postFlipLogin);
};

const getFlipFpsswrdUser=(body)=>{
console.log("in services");
console.log(body);
let getFlipFpsswrdUser=flipRepository.getFlipFpsswrdUser(body);
return(getFlipFpsswrdUser);
};
const patchFlipFpsswrdUser=(body)=>{
console.log("in services");
console.log(body);
let  postFlipFpsswrdUser=flipRepository.patchFlipFpsswrdUser(body);
return( postFlipFpsswrdUser);
};
    
const getFlipCpsswrdUser=(body)=>{
console.log("in services");
console.log(body);
let getFlipCpsswrdUser=flipRepository.getFlipCpsswrdUser(body);
return(getFlipCpsswrdUser);
};
const postFlipCpsswrdUser=(body)=>{
console.log("in services");
console.log(body);
let postFlipCpsswrdUser=flipRepository.patchFlipCpsswrdUser(body);
return(postFlipCpsswrdUser);
};
        
const delFlipUser=(body)=>{
console.log("in services");
console.log(body);
let delFlipUser=flipRepository.delFlipUser(body);
return(delFlipUser);
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
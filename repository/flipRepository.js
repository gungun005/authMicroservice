const getFlipRegisters=(body)=>{
console.log("in repo");
console.log(body);
return("Hi ! I m getting registered users");
};
const postFlipRegisters=(body)=>{
console.log("in repo");
console.log(body);
return("Here u can post users who want to register");
};
    
const getFlipLogin=(body)=>{
console.log("in repo");
console.log(body);
return("getting the logged in users");
};
const postFlipLogin=(body)=>{
console.log("in rep");
console.log(body);
return("any changes by logging user");
};
    
const getFlipFpsswrdUser=(body)=>{
console.log("in repo");
console.log(body);    
return("getting the logged in forgot password users");
};
const postFlipFpsswrdUser=(body)=>{
console.log("in repo");
console.log(body);
return("any changes by logging user who forgot password");
};
    
const getFlipCpsswrdUser=(body)=>{
console.log("in repo");
console.log(body);
return("getting the flip change password user");
};
const postFlipCpsswrdUser=(body)=>{
console.log("in repo");
console.log(body);   
return("post flip change pssword user ");
};
        
const delFlipUser=(body)=>{
console.log("in repo");
console.log(body);
return("user deleted!");
};
    module.exports={
        getFlipRegisters,
        postFlipRegisters,
        getFlipLogin,
        postFlipLogin,
        getFlipFpsswrdUser,
        postFlipFpsswrdUser,
        getFlipCpsswrdUser,
        postFlipCpsswrdUser,
        delFlipUser
    };
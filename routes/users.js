import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();

const User =[]


router.get("/user",(req, res)=>{
    res.send(User)
    res.send(`The list of all the User`)

});

router.post("/", (req, res)=>{
    //if we want to create new data to the array 
    
    //while we creating new object in the array list unique id also neccesary 
    // so that we can install npm i uuid so we get a unique id 
   // uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
   //1st method
//    const newuser = req.body;
//    const userId =uuidv4();
//    const userWithId = {...newuser,id: userId} 
//     console.log(userWithId);
//     User.push(userWithId)
//second method

const user = req.body;
User.push({id:uuidv4(),...user })

res.send(`The new user was created...!`)
  
})


//user/:id => req.params

router.get("/:id", (req, res)=>{

    //    const id = req.params.id;
    //   const userId = User.find((user)=>user.id===id)
    //   res.send(userId)

    //second method destructuring

    const {id} =req.params;
    const userId = User.find(user=>user.id===id)
    res.send(userId)
    res.send(`The single User details...!`)

});


router.delete("/", (req, res)=>{
      const {id} = req.params;

      //User = User.filter((user) => user.id !== id)

      User.delete((user)=>user.id !==id)
      res.send("The single User was deleted just before...!")

});


router.patch("/:id", (req, res)=>{

    //first method
    // const {id } =req.params;
    // const {firstname,lastname,age} =req.body;
    // const userTobeUpdate = User.find((user)=>user.id===id);
    // if(firstname){
    //     userTobeUpdate.firstname=firstname;
    // }
    // if(lastname){
    //     userTobeUpdate.lastname =lastname;
    // }
    // if(age){
    //     userTobeUpdate.age = age;
    // }

    //second method
    const {id } =req.params;
    const {firstname,lastname,email,age} =req.body;

    const userTobeUpdate = User.find((user)=>user.id===id);
    
    if(firstname) userTobeUpdate.firstname =firstname;
    if(lastname) userTobeUpdate.lastname = lastname;
    if(email) userTobeUpdate.email = email;
    if(age) userTobeUpdate.age = age;


    res.send("hello from update users")
});


export default router;

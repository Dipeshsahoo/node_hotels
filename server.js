const express = require('express')

const app = express();
const db= require('./db');//
require('dotenv').config()
const person=require('./models/person')
const MenuItem=require('./models/MenuItem')
const bodyParser=require('body-parser');
app.use(bodyParser.json()); //req.body

// Middleware to handle JSON parsing errors
// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//     return res.status(400).json({ error: 'Invalid JSON in request body' });
//   }
//   next();
// });

// app.get('/', (req, res) => {
//   res.send('Hello buddy , the king is here if you have any query then call only to Dipesh')
// })

// post route to add a person


// app.post('/person',(req,res)=>{
//   const data=req.body //assuming the requestbody containg the person data
//   // creating a new person document using mongoose model
//   const newPerson=new person(data)
//   // save the new person to the database
//   newPerson.save((error,savedPerson) =>{
//     if(error){
//       console.log("Error saving person",error);
//       res.status(500).json({error:"Internal server error"})
//     } else{
//       console.log("data saved sucessfully");
//       res.status(200).json(savedPerson)
//     }
//   })
// })

// app.post('/person',async(req,res)=>{
//   try{
//     const data=req.body //assuming the requestbody containg the person data
//  // creating a new person document using mongoose model
//     const newPerson=new person(data)
//       // save the new person to the database
//     const response= await newPerson.save()
//     console.log("Data saved")
//     res.status(200).json(response)

//   }catch(err){
//  console.log(err)
//  res.status(500).json({error:"Internal server error"})
//   }
// })


// GET Method to get the  person data
// app.get('/person',async (req,res)=>{
//   try{
//  const data= await person.find();
//  console.log("Data fetched")
//  res.status(200).json(data)
//   }catch(err){
// console.log(err)
// req.status(500).json({error:"INternal Server Error"})
//   }

// })

// app.get('/mia', (req, res) => {
//     res.send('do you want chicken')
//   })
//   app.post('/items',(req,res)=>{
//     res.send("data saved")
//   })
  
// app.get('/idli',(req,res)=>{
//     let newIdli={
//         idli:"mali idli",
//         chutney:true,
//         sambhar:false
//     }
// //    res.send("Welcom to south India we love to serve you china idli")
//    res.send(newIdli)
// })  
// app.post('/menu',async(req,res)=>{
//   try{
//     const menudata=req.body //assuming the requestbody containg the person data
//  // creating a new person document using mongoose model
//     const newMenu=new MenuItem(menudata)
//       // save the new person to the database
//     const response= await newMenu.save()
//     console.log("MenuData saved")
//     res.status(200).json(response)

//   }catch(err){
//  console.log(err)
//  res.status(500).json({error:"Internal server error"})
//   }
// })
// app.get('/menu',async (req,res)=>{
//   try{
//  const menudata= await MenuItem.find();
//  console.log("Menu Data fetched")
//  res.status(200).json(menudata)
//   }catch(err){
// console.log(err)
// req.status(500).json({error:"INternal Server Error"})
//   }

// })

// Person parametrized call
// app.get('/person/:workType', async (req,res)=>{
//   try{
//   const workType=req.params.workType;
//   if(workType=='chef'|| workType =='manager' || workType=='waiter'){
//    const response=await person.find({work:workType})
//    console.log("response fetched");
//    res.status(200).json({response})
     
//   }else{
//     res.status(404).json({error:"Invalid work type"})
//   }
//   } catch(err){
//     console.log(err)
//     req.status(500).json({error:"INternal Server Error"})
//   }
// })

// Import the router files
app.get('/',function(req,res){
    res.send('Welcome to our hotel')
})

// Import the router files

const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes)
const menuRoutes=require('./routes/menuRoutes')
app.use('/menu',menuRoutes)

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("listening on port 3000")
})


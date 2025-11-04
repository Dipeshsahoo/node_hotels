const express=require('express');
const router=express.Router();
const person=require('./../models/person')

router.post('/',async(req,res)=>{
    try{
      const data=req.body //assuming the requestbody containg the person data
   // creating a new person document using mongoose model
      const newPerson=new person(data)
        // save the new person to the database
      const response= await newPerson.save()
      console.log("Data saved")
      res.status(200).json(response)
  
    }catch(err){
   console.log(err)
   res.status(500).json({error:"Internal server error"})
    }
  })

  router.get('/',async (req,res)=>{
    try{
   const data= await person.find();
   console.log("Data fetched")
   res.status(200).json(data)
    }catch(err){
  console.log(err)
  req.status(500).json({error:"INternal Server Error"})
    }
  
  }) 
  router.put('/:id',async(req,res)=>{
    try{
      const personId =req.params.id;//Extract theid from yhe URL parameter
      const updatedPersonData=req.body; //updated  data from the person
      const response=await person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true,//Return the updated document
        runValidators:true,//Run Mongoose validation
      })
      if(!response){
        return res.status(404).json({error:'person not found'});
      }
      console.log('data updated')
      res.status(200).json(response)
    }catch(err){
         console.log(err)
         res.status(500).json({error:'Internal server Error'})
    }

  })

  // Delete  document fiels or record 

router.delete('/:id',async(req,res)=>{
  try{
  const personId=req.params.id; //Extract the persons ID from the URL Parameter
  const response= await person.findByIdAndDelete(personId)

 if(!response){
  return res.status(404).json({error:'person not found'});
}

  console.log('data updated')
  res.status(200).json({message:'person Deleted Sucessfully'})

}
catch(err){
  console.log(err)
  res.status(500).json({error:"server error"})
}
})
  
 
//  i am also adding comment for testing
  module.exports=router
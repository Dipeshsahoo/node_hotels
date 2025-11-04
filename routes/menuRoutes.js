const express=require('express')
const router=express.Router();
const MenuItem=require('./../models/MenuItem');

router.post('/',async(req,res)=>{
    try{
      const menudata=req.body //assuming the requestbody containg the person data
   // creating a new person document using mongoose model
      const newMenu=new MenuItem(menudata)
        // save the new person to the database
      const response= await newMenu.save()
      console.log("MenuData saved")
      res.status(200).json(response)
  
    }catch(err){
   console.log(err)
   res.status(500).json({error:"Internal server error"})
    }
  })
  router.get('/',async (req,res)=>{
    try{
   const menudata= await MenuItem.find();
   console.log("Menu Data fetched")
   res.status(200).json(menudata)
    }catch(err){
  console.log(err)
  req.status(500).json({error:"INternal Server Error"})
    }
  
  })

  // menu parametrized call
router.get('/:tasteType', async (req,res)=>{
    try{
    const tasteType=req.params.tasteType; //extract the worktype from the url
    if(tasteType=='sweet'|| tasteType =='spicy' || tasteType=='sour'){
     const response=await MenuItem.find({taste:tasteType})
     console.log("response fetched");
     res.status(200).json({response})
       
    }else{
      res.status(404).json({error:"Invalid work type"})
    }
    } catch(err){
      console.log(err)
      req.status(500).json({error:"INternal Server Error"})
    }
  })

  router.put('/:id',async(req,res)=>{
    try{
      const menuId=req.params.id;
      const updatedmenuData=req.body;
      const response=await MenuItem.findByIdAndUpdate(menuId,updatedmenuData,{
        new:true,//Return the updated document
        runValidators:true,//Run Mongoose validation
      })
      if(!response){
        return res.status(404).json({error:'Menu not found'});
      }
      console.log("data updated")
      res.status(200).json(response)
    }catch(err){
      console.log(err)
      req.status(500).json({error:"INternal Server Error"})
    }
  })

  router.delete('/:id',async(req,res)=>{
    try{const menuId=req.params.id;
    const response= await MenuItem.findByIdAndDelete(menuId)

    if(!response){
      return res.status(404).json({message:'menuItem not find'})
    }
    console.log('data DELETED successfully')
    res.status(200).json({message:'menudata DELETED successfully'})
  }catch(err){
 console.log(err)
 req.status(500).json({error:'internal server error'})
  }
  })
  module.exports=router
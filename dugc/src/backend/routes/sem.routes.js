const express = require('express');
const app = express();
const semExpressRoute = express.Router();
let SemSchema = require('../model/sem.model');

semExpressRoute.route('/').get((req,res)=>{
    SemSchema.find((error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

semExpressRoute.route('/sem/:id').get((req,res)=>{
   SemSchema.findById(req.params.id,(error,data)=>{
    if (error) {
        return next(error)
    } else {
        res.json(data)
    }
   }) 
})

// semExpressRoute.route('/add-student').post((req,res,next)=>{
//     SemSchema.create(req.body,(error, data) =>{
//     if (error) {
//         return next(error)
//     } else {
//         res.json(data)
//     }
// })
// })


// studentExpressRoute.route('/del-student/:id').delete((req,res)=>{
//     StudentSchema.findByIdAndRemove(req.params.id,(error,data)=>{
//      if (error) {
//          return next(error)
//      } else {
//         res.status(200).json({
//             msg: data
//         })
//      }
//     }) 
//  })


//  studentExpressRoute.route('/update-student/:id').put((req,res)=>{
//     StudentSchema.findByIdAndUpdate(req.params.id,{
//         $set: req.body
//     },(error,data)=>{
//      if (error) {
//          return next(error)
//      } else {
//          res.json(data);
//          console.log('Deleted Successfully!')
//      }
//     }) 
//  })


module.exports = semExpressRoute;
import express from "express"
import cors from "cors"

import reviews from "./api/reviews.route.js"


const app=express()

app.use(cors())//Sets up the middle ware and in this code allows all connections ("cross origin resource sharing")
app.use(express.json())//Middleware which tells application that requests will be sent in JSON 

app.use("/api/v1/reviews", reviews)//Sets up a route for requests with given string and will be handeled by routes defined in reviews
app.use("*",(req,res)=> res.status(404).json({error:'not found'}))//Will return a 404 error for all other requests that dont math the one above

export default app //exports for index to use
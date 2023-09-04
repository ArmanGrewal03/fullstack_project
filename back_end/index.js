import app from "./server.js"
import mongodb from "mongodb"

import ReviewsDAO from "./dao/ReviewsDAO.js"

const MongoClient = mongodb.MongoClient
const mongoPass="g397XugjlzsPtme4"

const uri = `mongodb+srv://armangrewal01:${mongoPass}@cluster0.u3cgbgd.mongodb.net/?retryWrites=true&w=majority`


const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize:50,//number of connections
        wtimeoutMS:2500,//time to connect before connection closes (timeout)
        useNewUrlParser:true//parses through the url and uri properly by using the new one
    }
    )
    .catch(err=>
        {
            console.err(err.stack)
            process.exit(1)
        })
    .then(async client=>{//THis is a promise and uses catch and then. The client is the result of the MongoCLient.connet()
        client.connect()
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        await ReviewsDAO.injectDB(client)
        app.listen(port,()=>//When listing to app.listen, it is listening to incoming https requests at a specific port number
        {
            console.log(`Listening on port ${port}`)
        })
    })


    //This code connects to the MONGO database 
    //App is imported from the server.js and is an instance of the express.js appliciton

    /*
    In this application we use async and await. Async is used when you want code to run without blocking other functions, so you use async
    so it can run while other shit is working. You can use them when having to work with things like databases and have to wait for fetch. 

    Promises are pieces of code that will always execute. They will have a catch block or then fucntion etc. 

    The await can be used so a async waits for a specific task to finish. For example when fetch, you want the async to wait before it contunes. 

    */
    
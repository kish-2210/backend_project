import dotenv from "dotenv"
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!")
})



// import express from "express" //iffe
// const app = express()

// ;( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) //uri/dbname :mongoose.connect('mongodb://127.0.0.1:27017/test')
//        app.on("error",(error)=> { //listner
//         console.error("ERROR: ",error)
//         throw err
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })


//     } catch (error) {
//         console.error("ERROR: ",error)
//         throw err
//     }
// })()
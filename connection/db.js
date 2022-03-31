import mongoose from "mongoose";

const Connection = async()=>{
    try {
        const URL =  `mongodb+srv://inshort:inshort@cluster0.vhsdm.mongodb.net/inshort?retryWrites=true&w=majority`;
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log("Database connected successfully!");
    } catch (error) {
        console.log("Error while connection to database", error);
    }
  
}

export default Connection;
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/companydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(db => console.log('DB IS CONNECTED'))
    .catch(error => console.log(error))
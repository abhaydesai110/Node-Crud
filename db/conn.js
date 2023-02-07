const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/DoctorData")
.then(()=>{
    console.log(`Database Connected`);
})
.catch(()=>{
    console.log(`Database Not Connected`);
});
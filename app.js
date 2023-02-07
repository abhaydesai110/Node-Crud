const express = require("express")
const app = express();
require("./db/conn.js");

const port = process.env.PORT || 4040;
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const Doctor = require("./models/doctor.model.js")



const demoRoutes = require("./routes/doctor.routes")
app.use("/doctors",demoRoutes)

app.listen(port,()=>{
    console.log(`Server Runing Port ${port}`);
});

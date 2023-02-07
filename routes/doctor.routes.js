const router = require("express").Router();

const{
    doctorInsert,
    doctorViewById,
    doctorViewByname,
    doctorViewAll,
    doctorUpdate,
    doctorDelete,
}= require("../controller/doctor.controller");

router.post("/doctorInsert",doctorInsert);
router.get("/doctorViewById/:name",doctorViewById)
router.get("/doctorViewByname/:name",doctorViewByname)
router.get("/doctorViewAll",doctorViewAll)
router.put("/doctorUpdate/:id",doctorUpdate)
router.delete("/doctorDelete/:id",doctorDelete)

module.exports =router;
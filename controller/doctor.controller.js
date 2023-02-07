const { reset } = require("nodemon");
const Doctor = require("../models/doctor.model");

exports.doctorInsert = async (req, res) => {
  try {
    const doctorDetails = new Doctor({
      name: req.body.name,
      specialist: req.body.specialist,
      phoneNumber: req.body.phoneNumber,
      adress: req.body.adress,
      email: req.body.email,
      gender: req.body.gender,
    });

    console.log("doctorDetail", doctorDetails);
    const saveDoctorData = await doctorDetails.save();

    res.status(201).json({
      message: "Demo Registed",
      status: 201,
      data: saveDoctorData,
    });
  } catch (error) {
    console.log("error::", error);
    res.status(400).json({
      message: "Demo not insert",
      status: 400,
    });
  }
};

exports.doctorViewById = async (req, res) => {
  try {
    var id = req.params.id;

    const data = await demoData.find({ _id: id });

    res.status(200).json({
      message: "View By Id Demo",
      status: 200,
      info: {
        id: data[0]._id,
        name: data[0].name,
        phoneNumber: data[0].phoneNumber,
        adress: data[0].adress,
        email: data[0].email,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wrong",
      status: 400,
    });
  }
};

exports.doctorViewByname = async (req, res) => {
  try {
    var name = req.params.name;
    console.log("name::", name);
    const data = await demoData.find({ name: name });
    console.log("data:::", data);
    res.status(200).json({
      message: "View By Id Demo",
      status: 200,
      info: {
        id: data[0]._id,
        name: data[0].name,
        phoneNumber: data[0].phoneNumber,
        adress: data[0].adress,
        email: data[0].email,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wrong",
      status: 400,
    });
  }
};

exports.doctorViewAll = async (req, res) => {
  try {
    const data = await demoData.find();

    res.status(200).json({
      message: "get all data",
      status: 200,
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: "Somthing Went Wrong",
      status: 400,
    });
  }
};

exports.doctorUpdate = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await demoData
      .findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        {
          $set: {
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            adress: req.body.adress,
            email: req.body.email,
          },
        }
      )
      .then(() => {
        res.status(200).json({
          message: "Update Data Successfully",
          status: 200,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Update Data Not Successfully",
          status: 500,
        });
      });
  } catch (error) {
    res.status(400).json({
      message: "Somthing Went Wrong",
      status: 400,
    });
  }
};

exports.doctorDelete = async (req, res) => {
  try {
    var id = req.params.id;
    const data = await demoData.find({ id: id });
    const del = demoData.findByIdAndDelete(id);
    del.exec(function (err, data) {
      if (err) throw err;

      res.status(200).json({
        message: "Delete Demo Data",
        status: 200,
        data: data,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Data Not Delete",
      status: 500,
    });
  }
};

import studentModel from "../model/studentModel.js";

export const getStudentsController = async (req, res) => {
  try {
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit);
    let skip = (page - 1) * limit;

    const students = await studentModel.find().skip(skip).limit(limit);
    res.status(200).send({
      success: true,
      message: "students detalis retrived successfully",
      students,
      length: students.length,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting student details",
    });
  }
};

export const studentCountController = async (req, res) => {
  try {
    const total = await studentModel.find({}).estimatedDocumentCount();
    res.status(200).send({
      success: true,
      total,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error in product count",
      error,
      success: false,
    });
  }
};

//adding dtudent details to database

// const insertStd = async() =>{
//   try {
//     console.log(student);
//     const std = await studentModel.insertMany(student)

//   } catch (error) {
//     console.log(error);
//   }
// }

// insertStd()

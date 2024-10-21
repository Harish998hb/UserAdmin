import { UserModel } from "../models/userModel.js";

// Middleware

export async function isTeacher(req, res, next) {
  let { id } = req.body;
  const user = await UserModel.findById(id);
  console.log(id);
  if (user) {
    if (user.role == "teacher") {
      console.log("Teacher");
      next();
    } else {
      res.status(400).send(`Unauthorized `);
    }
  } else res.json("No such users found");
}

export function checkTeacher(req, res) {
  res.json("Teacher Confirmed ");
}

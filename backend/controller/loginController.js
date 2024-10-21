import { UserModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  let { username, firstname, lastname, password, email, role } = req.body;
  let hashPass = await bcrypt.hash(password, 10);
  let isUserExist = await UserModel.findOne({ username });
  if (!isUserExist) {
    let user = await UserModel.create({
      username,
      firstname,
      lastname,
      password: hashPass,
      email,
      role,
    });
    res.json(user);
    user.save();
  } else res.json("user Already exist");
};

export const verifyUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    const isUserExist = await UserModel.findOne({ email });
    if (!isUserExist) {
      res.status(404).send("User Not Found");
    }
    bcrypt.compare(password, isUserExist.password, (err, result) => {
      if (!result) res.status(401).send("Invalid Credential");
      else {
        const token = jwt.sign({ id: isUserExist._id }, "secret");
        res.json({ authToken: token, userId: isUserExist._id });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

import express from "express";
import { isTeacher ,checkTeacher} from "../controller/gradesController.js";

export const router=express.Router();

router.get('/teacher',isTeacher,checkTeacher);



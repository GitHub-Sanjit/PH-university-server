/* eslint-disable no-console */
import express from 'express';
import { UserControllers } from './user.controller';
import { crateStudentValidationSchema } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(crateStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;

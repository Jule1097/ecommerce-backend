import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller";
import {verifySignUp} from '../middlewares';

router.post("/signup", [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], authCtrl.signUp);
router.post("/login", authCtrl.logIn);

export default router;

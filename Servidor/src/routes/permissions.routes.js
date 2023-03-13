import { Router } from "express";
const router = Router();
import * as PermissionCtrl from '../controllers/rolepermissions.controller';

router.post('/', PermissionCtrl.createPermission)

router.get('/', PermissionCtrl.getPermissions)

export default router;
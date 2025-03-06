import { Router } from "express";
import { loginCtrl, refreshTokenLimitCtrl } from "../controllers/auth.ctrl";
import { LoginDto, tokenDto } from "../validations/dtos/auth.dto";
import { validateDto } from "../middlewares/validate-dto";

const router = Router();

/**
 * http://localhost:3010/auth/login [POST]
 */
router.post("/login", validateDto(LoginDto), loginCtrl);


/**
 * http://localhost:3010/auth/refresh-token [POST]
 */
router.post("/refresh-token", validateDto(tokenDto), refreshTokenLimitCtrl);

export { router };
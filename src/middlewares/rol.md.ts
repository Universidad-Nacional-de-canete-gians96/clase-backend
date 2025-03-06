import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { getUser } from "../services/usuario.srv";
import { RolUsuario } from "@prisma/client";

export const rolRequired = (role: RolUsuario) => {
    return async ({ body }: Request, res: Response, next: NextFunction) => {
        try {
            const { user } = body;
            const { rol } = await getUser(user.id);
            if (rol === role) {
                next();
            } else {
                res.status(401).send("ROL_INVALID");
            }
        } catch (error) {
            res.status(401).send("SESSION_NO_VALID");
        }
    }
};

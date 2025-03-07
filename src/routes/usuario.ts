import { Router } from "express";
import {
    createUsuarioCtrl,
    getListaUsuarioCtrl,
    getUsuarioCtrl,
    deleteUsuarioCtrl,
    updateUsuarioCtrl,
} from "../controllers/usuario.ctrl";
import { createPersonajeValidation } from "../validations/joi/personaje.valid";
import { validateBodyDto } from "../middlewares/validate-dto";
import { RolUsuario } from "@prisma/client";
import { rolRequired } from "../middlewares/rol.md";
import { CrearUsuarioDto, ModificarUsuarioDto } from "../validations/dtos/usuario.dto";
const router = Router();

//podemos usar DTO's o Joi para validar los datos enviados [Ejemplo]
router.post("/", validateBodyDto(CrearUsuarioDto), createUsuarioCtrl);

router.get("/list", rolRequired(RolUsuario.ADMIN), validateBodyDto(ModificarUsuarioDto), getListaUsuarioCtrl);

router.get("/only/:id", getUsuarioCtrl);

router.delete("/:id", deleteUsuarioCtrl);

router.put("/", updateUsuarioCtrl);

export { router };
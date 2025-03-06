import { Router } from "express";
import {
  createPersonajeCtrl,
  getListaPersonajeCtrl,
  getPersonajeCtrl,
  deletePersonajeCtrl,
  updatePersonajeCtrl,
} from "../controllers/personaje.ctrl";
import { createPersonajeValidation } from "../validations/joi/personaje.valid";
import { CreatePersonajeDto } from "../validations/dtos/personaje.dto";
import { validateDto } from "../middlewares/validate-dto";
import { RolUsuario } from "@prisma/client";
import { rolRequired } from "../middlewares/rol.md";
const router = Router();

//podemos usar DTO's o Joi para validar los datos enviados [Ejemplo]
router.post("/", validateDto(CreatePersonajeDto), createPersonajeValidation, createPersonajeCtrl);

router.get("/list", rolRequired(RolUsuario.ADMIN), getListaPersonajeCtrl);

router.get("/only/:id", getPersonajeCtrl);

router.delete("/:id", deletePersonajeCtrl);

router.put("/", updatePersonajeCtrl);

export { router };
import { Router } from "express";
import {
  createPersonajeCtrl,
  getListaPersonajeCtrl,
  getPersonajeCtrl,
  deletePersonajeCtrl,
  updatePersonajeCtrl,
} from "../controllers/personaje.ctrl";
// import { createPersonajeValidation } from "../validations/joi/personaje.valid";
import { CreatePersonajeDto, GetPersonajeDto, UpdatePersonajeDto } from "../validations/dtos/personaje.dto";
import { validateBodyDto, validateParamsDto } from "../middlewares/validate-dto";
import { ValidateSession } from "../middlewares/sesion.md";
const router = Router();

//podemos usar DTO's o Joi para validar los datos enviados [Ejemplo]
// router.post("/", ValidateSession, validateBodyDto(CreatePersonajeDto), createPersonajeValidation, createPersonajeCtrl);
router.post("/", ValidateSession, validateBodyDto(CreatePersonajeDto), createPersonajeCtrl);

router.get("/list", ValidateSession, getListaPersonajeCtrl);

router.get("/only/:id", ValidateSession, validateParamsDto(GetPersonajeDto), getPersonajeCtrl);

router.delete("/:id", ValidateSession, validateParamsDto(GetPersonajeDto), deletePersonajeCtrl);

router.put("/", ValidateSession, validateBodyDto(UpdatePersonajeDto), updatePersonajeCtrl);

export { router };
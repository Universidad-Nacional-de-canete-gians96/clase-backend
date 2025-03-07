import { PrismaClient, Personaje } from "@prisma/client";
const prisma = new PrismaClient();

export const createPersonajeSrv = async ({
  foto,
  nombre,
  idUsuario
}: Personaje) => {
  if (!nombre) {
    return { error: "Es requerido" }
  }
  const response = await prisma.personaje.create({
    data: {
      nombre,
      foto,
      idUsuario
    }
  });

  return response;
};

export const getListaPersonajeSrv = async (idUsuario: number) => {

  const response = await prisma.personaje.findMany(
    {
      where:
      {
        idUsuario,
        flag: true
      }
    });
  return response;
};


export const getPersonajeSrv = async (id: number) => {
  const response = await prisma.personaje.findFirst({
    where: {
      id,
      flag: true
    }
  });
  if (!response) {
    return 405
  }
  return response;
};

export const deletePersonajeSrv = async (id: number, idUsuario: number) => {

  //Hard delete
  // const response = await prisma.personaje.delete({
  //   where: {
  //     id
  //   }
  // });

  //soft delete
  const response = await prisma.personaje.update({
    where: {
      id,
      idUsuario
    },
    data: {
      flag: false
    }
  });
  return response;
};

export const updatePersonajeSrv = async ({
  id,
  nombre,
  foto,
  idUsuario
}: Personaje) => {
  if (!nombre) {
    return { error: "Es requerido" }
  }
  const response = await prisma.personaje.update({
    where: {
      id,
      idUsuario
    },
    data: {
      nombre, foto
    }
  });

  return response;
};

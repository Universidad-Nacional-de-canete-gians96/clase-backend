import { PrismaClient, Usuario } from "@prisma/client";
import { encrypt } from "../utils/bcrypt.handle";
import { generateTokenUnlimitTime } from "../utils/jwt.handle";
const prisma = new PrismaClient();
export const registerUser = async ({
    email,
    password,
    nombres
}: Usuario) => {

    const checkIs = await prisma.usuario.findFirst({
        where: { email },
    });
    if (checkIs?.email) return "ALREADY_USER";

    const passHash = await encrypt(password);
    const response = await prisma.usuario.create({
        data: {
            email,
            nombres,
            password: passHash,
        }
    });
    return response
};

export const updateUser = async ({
    id,
    nombres,
    email,
    password,
}: Usuario) => {

    const checkIs = await prisma.usuario.findFirst({
        where: { email },
    });
    if (checkIs?.email && id === 0) return "ALREADY_USER";


    const response = await prisma.usuario.update({
        where: {
            id
        },
        data: {
            nombres,
            email,
            password: await encrypt(password),
        }
    });
    return response
};




export const getListUsuario = async () => {
    const response = await prisma.usuario.findMany();
    return response
};

export const getUser = async (id: number) => {

    const user = await prisma.usuario.findFirst({
        where: {
            id
        },
    });
    if (!user) return

    return user
};

export const getSearchUsuario = async (nombres: string) => {
    const response = await prisma.usuario.findMany({
        where: {
            nombres
        }
    });

    return response;
};

export const deleteUser = async (id: number) => {

    const response = await prisma.usuario.delete({
        where: {
            id
        }
    })
    return response;
};

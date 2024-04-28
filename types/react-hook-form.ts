import { z } from "zod";

export const LoginInputValidationSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
});

export type LoginInput = {
    username: string
    password: string
}

export enum LoginInputFieldnames {
    USERNAME = "username",
    PASSWORD = "password"
}
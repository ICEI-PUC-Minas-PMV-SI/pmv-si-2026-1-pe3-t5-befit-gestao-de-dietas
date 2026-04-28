import { Type, Static } from "@sinclair/typebox";

export const AuthenticateUserBodySchema = Type.Object({
  email: Type.String({ format: "email" }),
  password: Type.String({ minLength: 1 }),
});

export type AuthenticateUserBody = Static<typeof AuthenticateUserBodySchema>;

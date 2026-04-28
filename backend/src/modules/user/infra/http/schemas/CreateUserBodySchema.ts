import { Type, Static } from "@sinclair/typebox";

export const CreateUserBodySchema = Type.Object({
  name: Type.Optional(Type.String()),
  email: Type.String({ format: "email" }),
  password: Type.String({ minLength: 4 }),
});

export type CreateUserBody = Static<typeof CreateUserBodySchema>;

import type { FastifyInstance } from "fastify";
import { CreateUserBodySchema } from "../schemas/CreateUserBodySchema";
import { AuthenticateUserBodySchema } from "../schemas/AuthenticateUserBodySchema";
import { createUserHandler } from "../handlers/createUserHandler";
import { authenticateUserHandler } from "../handlers/authenticateUserHandler";

export async function userRoutes(app: FastifyInstance): Promise<void> {
  app.post(
    "/",
    { schema: { body: CreateUserBodySchema, tags: ["Users"] } },
    createUserHandler,
  );

  app.post(
    "/sessions",
    { schema: { body: AuthenticateUserBodySchema, tags: ["Users"] } },
    authenticateUserHandler,
  );
}

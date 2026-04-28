import crypto from "crypto";
import type { FastifyRequest, FastifyReply } from "fastify";
import "@fastify/jwt";
import type { CreateUserBody } from "../schemas/CreateUserBodySchema";
import type { CreateUserService } from "../../../services/CreateUserService";
import { container } from "../../../../../shared/container";

export async function createUserHandler(
  request: FastifyRequest<{ Body: CreateUserBody }>,
  reply: FastifyReply,
): Promise<void> {
  try {
    const createUserService = container.resolve<CreateUserService>("createUserService");
    const user = await createUserService.execute(request.body);

    const jti = crypto.randomUUID();
    const token = await reply.jwtSign(
      { sub: user.id, role: user.role, jti },
      { expiresIn: "8h" },
    );

    reply.status(201).send({
      token,
      user: { id: user.id, email: user.email, name: user.name ?? null },
    });
  } catch (err: any) {
    reply.status(err.statusCode ?? 500).send({ message: err.message });
  }
}

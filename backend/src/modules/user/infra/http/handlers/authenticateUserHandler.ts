import crypto from "crypto";
import type { FastifyRequest, FastifyReply } from "fastify";
import "@fastify/jwt";
import type { AuthenticateUserBody } from "../schemas/AuthenticateUserBodySchema";
import type { AuthenticateUserService } from "../../../services/AuthenticateUserService";
import { container } from "../../../../../shared/container";

export async function authenticateUserHandler(
  request: FastifyRequest<{ Body: AuthenticateUserBody }>,
  reply: FastifyReply,
): Promise<void> {
  try {
    const authenticateUserService = container.resolve<AuthenticateUserService>("authenticateUserService");
    const user = await authenticateUserService.execute(request.body);

    const jti = crypto.randomUUID();
    const token = await reply.jwtSign(
      { sub: user.id, role: user.role, jti },
      { expiresIn: "8h" },
    );

    reply.status(200).send({
      token,
      user: { id: user.id, email: user.email, name: user.name ?? null },
    });
  } catch (err: any) {
    reply.status(err.statusCode ?? 500).send({ message: err.message });
  }
}

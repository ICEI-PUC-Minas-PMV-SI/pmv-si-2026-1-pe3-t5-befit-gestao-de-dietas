import type { FastifyRequest, FastifyReply } from "fastify";
import "@fastify/jwt";

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  try {
    await request.jwtVerify();
  } catch {
    reply.status(401).send({ message: "Unauthorized" });
  }
}

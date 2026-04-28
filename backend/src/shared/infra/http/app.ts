import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import fastifyCors from "@fastify/cors";
import fastifyHelmet from "@fastify/helmet";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { name, version } from "../../../../package.json";
import { userRoutes } from "../../../modules/user/infra/http/routes/user.routes";

const app = fastify({
  trustProxy: process.env.NODE_ENV === "prod",
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

app.register(fastifyHelmet);
app.register(fastifyCors, { origin: true });

app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET ?? "change-me-in-production",
});

app.register(fastifySwagger, {
  swagger: {
    info: { title: name, version },
  },
});

app.register(fastifySwaggerUi, {
  routePrefix: "/documentation",
  staticCSP: true,
});

app.get("/health", async (_, reply) => reply.send());
app.get("/", async (_, reply) => reply.send({ name, version }));

app.register(userRoutes, { prefix: "/users" });

export { app };

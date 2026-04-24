import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastify from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { name, version } from "../../../../package.json"

const app = fastify({
    trustProxy: process.env.NODE_ENV === "prod",
    logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

app.register(fastifySwagger, {
    swagger: {
        info: {
            title: name,
            version,
        },
    },
});

app.register(fastifySwaggerUi, {
    routePrefix: "/documentation",
    staticCSP: true,
});

app.get("/health", async (_, reply) => reply.send());
app.get("/", async (_, reply) => reply.send({ name, version }));

export { app };

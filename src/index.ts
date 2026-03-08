import { app } from "./shared/infra/http/app";

app.listen({
    port: Number(process.env.PORT) || 3333,
    host: '0.0.0.0',
});

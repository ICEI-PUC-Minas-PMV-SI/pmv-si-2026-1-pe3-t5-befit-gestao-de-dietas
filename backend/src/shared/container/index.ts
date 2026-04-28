import { createContainer } from "awilix";
import { registerDataSources } from "./registerDataSource";
import { registerProviders } from "./registerProviders";
import { registerServices } from "./registerServices";

const container = createContainer({ injectionMode: "CLASSIC" });

registerDataSources(container);
registerProviders(container);
registerServices(container);

export { container };

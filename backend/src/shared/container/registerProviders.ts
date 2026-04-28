import { asClass, AwilixContainer } from "awilix";
import { Argon2HashProvider } from "../../modules/user/providers/HashProvider/implementations/Argon2HashProvider";

export function registerProviders(container: AwilixContainer): void {
  container.register({
    hashProvider: asClass(Argon2HashProvider).singleton(),
  });
}

import { asClass, type AwilixContainer } from "awilix";
import { UsersRepository } from "../../modules/user/infra/typeorm/repositories/UsersRepository";
import { CreateUserService } from "../../modules/user/services/CreateUserService";
import { AuthenticateUserService } from "../../modules/user/services/AuthenticateUserService";

export function registerServices(container: AwilixContainer): void {
  container.register({
    usersRepository: asClass(UsersRepository).singleton(),
    createUserService: asClass(CreateUserService).singleton(),
    authenticateUserService: asClass(AuthenticateUserService).singleton(),
  });
}

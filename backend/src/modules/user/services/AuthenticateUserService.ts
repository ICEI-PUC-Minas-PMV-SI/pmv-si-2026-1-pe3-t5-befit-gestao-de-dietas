import type { IUsersRepository } from "../repositories/IUsersRepository";
import type { IHashProvider } from "../providers/HashProvider/models/IHashProvider";
import type { Users } from "../infra/typeorm/Users";

interface AuthenticateDTO {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
  ) {}

  async execute({ email, password }: AuthenticateDTO): Promise<Users> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw Object.assign(new Error("Credenciais inválidas."), { statusCode: 401 });
    }

    const match = await this.hashProvider.verify(user.password_hash, password);
    if (!match) {
      throw Object.assign(new Error("Credenciais inválidas."), { statusCode: 401 });
    }

    return user;
  }
}

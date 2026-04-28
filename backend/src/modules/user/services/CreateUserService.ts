import type { IUsersRepository } from "../repositories/IUsersRepository";
import type { IHashProvider } from "../providers/HashProvider/models/IHashProvider";
import type { Users } from "../infra/typeorm/Users";

interface CreateUserDTO {
  name?: string;
  email: string;
  password: string;
}

export class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
  ) {}

  async execute({ name, email, password }: CreateUserDTO): Promise<Users> {
    const existing = await this.usersRepository.findByEmail(email);
    if (existing) {
      throw Object.assign(new Error("E-mail já cadastrado."), { statusCode: 409 });
    }

    const password_hash = await this.hashProvider.hash(password);
    return this.usersRepository.create({ name, email, password_hash });
  }
}

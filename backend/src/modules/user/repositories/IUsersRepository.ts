import type { Users } from "../infra/typeorm/Users";
import type { CreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUsersRepository {
  findByEmail(email: string): Promise<Users | null>;
  findById(id: string): Promise<Users | null>;
  create(data: CreateUserDTO): Promise<Users>;
}

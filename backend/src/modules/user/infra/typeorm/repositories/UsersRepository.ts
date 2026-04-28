import type { DataSource, Repository } from "typeorm";
import { Users } from "../Users";
import type { IUsersRepository } from "../../../repositories/IUsersRepository";
import type { CreateUserDTO } from "../../../dtos/ICreateUserDTO";

export class UsersRepository implements IUsersRepository {
  private repo: Repository<Users>;

  constructor(postgresDataSource: DataSource) {
    this.repo = postgresDataSource.getRepository(Users);
  }

  async findByEmail(email: string): Promise<Users | null> {
    return this.repo.findOne({ where: { email } });
  }

  async findById(id: string): Promise<Users | null> {
    return this.repo.findOne({ where: { id } });
  }

  async create(data: CreateUserDTO): Promise<Users> {
    const user = this.repo.create(data);
    return this.repo.save(user);
  }
}

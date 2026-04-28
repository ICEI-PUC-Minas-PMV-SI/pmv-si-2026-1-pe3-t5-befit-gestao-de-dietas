import argon2 from "argon2";
import type { IHashProvider } from "../models/IHashProvider";

export class Argon2HashProvider implements IHashProvider {
  private readonly pepper: string;

  constructor() {
    const pepper = process.env.PASSWORD_PEPPER;
    if (!pepper || pepper.length < 16) {
      throw new Error("PASSWORD_PEPPER must be set and at least 16 characters long");
    }
    this.pepper = pepper;
  }

  async hash(payload: string): Promise<string> {
    return argon2.hash(payload + this.pepper, {
      type: argon2.argon2id,
      memoryCost: 65536,
      timeCost: 3,
      parallelism: 4,
    });
  }

  async verify(hash: string, payload: string): Promise<boolean> {
    return argon2.verify(hash, payload + this.pepper);
  }
}

export interface IHashProvider {
  hash(payload: string): Promise<string>;
  verify(hash: string, payload: string): Promise<boolean>;
}

declare module "*/config.json" {
  export const databaseConnectionConfig: {
    type: string,
    host: string,
    username: string,
    password: string,
    database: string,
    port: number,
  };
}

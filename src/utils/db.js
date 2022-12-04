import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: process.env.DATABASE_HOST_NAME,
  user: process.env.DATABASE_USERANME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  database: process.env.NAME_DATABASE,
});

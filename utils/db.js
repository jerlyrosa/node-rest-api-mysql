import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: process.env.DATABASE_HOST_NAME,
  user: process.env.DATABASE_HOST_USER,
  password: process.env.DATABSE_PASSWORD,
  port: process.env.DATABASE_PORT,
  database: NAME_DATABASE,
});

import { pool } from "../utils/db.js";

export const Ping = async (req, res) => {
  const [result] = await pool.query('SELECT "Pong" AS result');
  res.json(result[0]);
};

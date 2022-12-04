import { pool } from "../utils/db.js";

export const getEmployess = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee");
  res.json(rows);
};

export const CreateEmployee = async (req, res) => {
  const { name, salary } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO employee (name, salary) VALUES(?, ?)",
    [name, salary]
  );

  // res.send("Post success");
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

export const UpdateEmployee = (req, res) => {
  res.send("Update employee");
};

export const DeleteEmployee = (req, res) => {
  res.send("Delete employees");
};

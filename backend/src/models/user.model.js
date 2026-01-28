import pool from "../config/db.js";


export const createUser = async (full_name, email, password) => {
  const res = await pool.query(
    `INSERT INTO users (full_name, email, password)
     VALUES ($1, $2, $3)
     RETURNING id, full_name, email`,
    [full_name, email, password]
  );
  return res.rows[0];
};

export const findUserByEmail = async (email) => {
  const res = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return res.rows[0];
};

export const saveResetToken = async (id, token, expiry) => {
  await pool.query(
    `UPDATE users 
     SET reset_token=$1, reset_token_expiry=$2
     WHERE id=$3`,
    [token, expiry, id]
  );
};

export const findByResetToken = async (token) => {
  const res = await pool.query(
    `SELECT * FROM users
     WHERE reset_token=$1 AND reset_token_expiry > NOW()`,
    [token]
  );
  return res.rows[0];
};

export const updatePassword = async (id, hash) => {
  await pool.query(
    `UPDATE users
     SET password=$1, reset_token=NULL, reset_token_expiry=NULL
     WHERE id=$2`,
    [hash, id]
  );
};

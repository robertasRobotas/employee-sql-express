import pkg from "pg";
const { Pool } = pkg;

const connectionString =
  "postgres://ewsexcth:TXDPbfDv2j5l7Vs_2x4eLjNti0ucyyGb@mouse.db.elephantsql.com:5432/ewsexcth";

const pool = new Pool({
  connectionString,
});

export default pool;

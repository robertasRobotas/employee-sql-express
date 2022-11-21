const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

require("dotenv").config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

app.get("/", (req, res) => {
  console.log("hittt");

  res.status(200).json({ works: "yes" });
});

app.post("/insertEmployee", async (req, res) => {
  try {
    const employee = await db.query(`INSERT INTO public.employee(
      id, lastname, firstname, bandlevel, projectid)
      VALUES (${req.body.id}, '${req.body.lastName}', '${req.body.firstName}', ${req.body.bandLevel}, ${req.body.projectId})`);
    return res.status(200).json({ status: "Insert was made successfully" });
  } catch (err) {
    console.log(err);
  }

  res.status(500).json({ status: "Something went wrong" });
});

app.get("/getAllEmployee", async (req, res) => {
  try {
    const employee = await db.query("SELECT * FROM employee");
    console.log(employee.rows);

    res.status(200).json({ employee: employee.rows });
  } catch (err) {
    console.log(err);
  }

  console.log("x");
});

app.listen(3000, () => {
  console.log("Listed on port 3000");
});

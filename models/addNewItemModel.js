import sqlite3 from "sqlite3";

export const addNewItemModel = async ({ id, name, cost, supplier }) => {
  const db = new sqlite3.Database(
    "database/orders.db",
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) console.log(err);
      else console.log("successfully connected");
    }
  );

  const suppl = JSON.stringify(supplier);

  return new Promise((resolve, reject) => {
    const sqlQuery = `INSERT INTO items (id, name, cost,supplier) VALUES (?,?, ?,?)`;
    return db.run(sqlQuery, [id, name, cost, suppl], (err) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve();
    });
  });
};

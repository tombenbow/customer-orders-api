import sqlite3 from "sqlite3";

export const viewItemsModel = async () => {
  const db = new sqlite3.Database(
    "database/orders.db",
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) console.log(err);
      else console.log("successfully connected");
    }
  );

  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM items", function (err, rows) {
      if (err) {
        console.log(err);
        return reject(err)
      }
      resolve(rows);
    });
  });
};

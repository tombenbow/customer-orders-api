// const sqlite3 = require("sqlite3");
// const db = new sqlite3.Database(
//   "./orders.db",
//   sqlite3.OPEN_READWRITE,
//   (err) => {
//     if (err) console.log(err);
//     else console.log("successfully connected");
//   }
// );

// exports.fetchItems = () => {
//   db.all("SELECT * FROM items", function (err, rows) {
//     rows.forEach(function (row) {
//       console.log(row);
//     });
//   });
// };


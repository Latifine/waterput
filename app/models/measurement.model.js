const sql = require("./db.js");

const Measurement = function(measurement) {
  this.id = measurement.id;
  this.distance = measurement.distance;
  this.time = measurement.time;
};

Measurement.getAll = (result) => {
  let query = "SELECT * FROM data ORDER BY time DESC";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("measurements: ", res);
    result(null, res);
  });
};

module.exports = Measurement;
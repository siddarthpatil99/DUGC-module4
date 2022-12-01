const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let semSchema = new Schema(
  {
    sem3: {
        type: Array,
    },
    sem4: {
        type: Array,
    },
    sem5: {
        type: Array,
    },
    sem6: {
        type: Array,
    },
    sem7: {
        type: Array,
    },
    sem8: {
        type: Array,
    }
},
  {
    collection: "semanalysis", //table name
  }
  
);

module.exports = mongoose.model("SemSchema", semSchema);
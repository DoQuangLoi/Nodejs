const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, require: true },
    points: {
        type: Number,
        default: 0,
    },
    time: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model("Thi", UserSchema) || mongoose.models.Thi;
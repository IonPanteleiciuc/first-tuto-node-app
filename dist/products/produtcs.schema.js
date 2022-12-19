"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    name: { type: String, required: false },
    description: { type: String, required: false },
    price: { type: String, required: false },
});
//# sourceMappingURL=produtcs.schema.js.map
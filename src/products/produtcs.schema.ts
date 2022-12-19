import * as mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
	name: { type: String, required: false },
	description: { type: String, required: false },
	price: { type: String, required: false },
});

export interface ProductInterface {
    _id: string;
    name: string;
    description: string;
    price: string;
}
import * as mongoose from "mongoose";
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    description?: string;
    price?: string;
}>;
export interface ProductInterface {
    _id: string;
    name: string;
    description: string;
    price: string;
}

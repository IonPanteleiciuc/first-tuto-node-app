import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProductDto } from "src/dto";
import { ProductInterface } from "./produtcs.schema";

@Injectable()
export class ProductsService {
	constructor(@InjectModel("User") private readonly productModel: Model<ProductInterface>) {}

	async listProducts() {
		let products = await this.productModel.find();
		return products;
	}

	async addProduct(dto: ProductDto) {
		const prod = new this.productModel({
			name: dto.name,
			description: dto.description,
			price: dto.price,
		});

		const output = await prod.save();

        return output;
	}
}

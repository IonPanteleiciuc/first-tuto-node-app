import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { ProductSchema } from "./produtcs.schema";

@Module({
	imports: [MongooseModule.forFeature([{ name: "User", schema: ProductSchema }])],
	controllers: [ProductsController],
	providers: [ProductsService],
})
export class ProductsModule {}

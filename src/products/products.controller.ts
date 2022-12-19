import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductDto } from 'src/dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService
    ){}

    @Get()
    async listProducts(){
        return this.productsService.listProducts();
    }

    @Post('add')
    async addProduct(@Body() dto: ProductDto){
        return this.productsService.addProduct(dto);
    }


}

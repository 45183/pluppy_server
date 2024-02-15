const ProductService = require("../service/productService");

class ProductController {
    constructor() {
        this.productService = new ProductService();
    }

    // 상품 등록
    registerProduct = async (req, res) => {
        const {name, price, description, image1}
            = req.body;

            console.log('controller에서의 name:',name);
        // 상품 정보 하나라도 빠지면 에러메세지 출력
        if (!name || !price || !description || !image1) {
            return res.status(400).json({
            errorMessage: '상품 정보 입력을 완료해 주세요.',
        });
        }
        try {   
            const product = await this.productService.createProduct(
                name, price, description, image1    
            );
            return res.status(201).json({
                message: '상품 등록이 완료되었습니다.',
                product,
            });
        } catch(error) {
            console.log(error);
            return res.status(500).json({
                errorMessage: error.message,
                error: error,
            });
        }
    }
}

module.exports = ProductController;

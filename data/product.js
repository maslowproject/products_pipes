import fs from 'fs';

export function sellProductTo(productId, customerId) {
    fs.readFile('../mock/product.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        const products = JSON.parse(data);
        
        const productIndex = products.findIndex(({ id }) => productId === id);
        const product = products[productIndex];

        products.splice(productIndex, 1);

        product.purchasedBy = customerId;

        products.push(product);

        json = JSON.stringify(products);
        fs.writeFile('../mock/product.json', json, 'utf8');
    }});
}
import ProductCard from "./ProductCard"

const products = [
    { id: 1, name: 'Phone', price: 500 },
    { id: 2, name: 'Laptop', price: 1000 },
    { id: 3, name: 'Headphones', price: 150 },
    { id: 4, name: 'Smartwatch', price: 200 },
    { id: 5, name: 'Tablet', price: 300 },
    { id: 6, name: 'Camera', price: 700 },
    { id: 7, name: 'Printer', price: 250 },
    { id: 8, name: 'Monitor', price: 400 },
]

function ProductList() {
    return (
        <div className="row">
            {products.map((product) => (
                <div key={product.id} className="col-md-3 mb-4">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    )
}

export default ProductList

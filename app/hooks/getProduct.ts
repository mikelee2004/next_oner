import { Product } from "../types/product";

export async function getProduct(): Promise<Product[]> {
    const response = await fetch("http://127.0.0.1:3001/api/product", {
        cache: "no-store",
        credentials: "same-origin",
    });
    const data = await response.json();

    const Product: Product[] = data.map((product: any) => ({
        id: product.id,
        image: product.image,
        name: product.name,
        description: product.description,
        price: product.price,
    }));

    return Product;
}
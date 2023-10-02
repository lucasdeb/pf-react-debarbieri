const products = [
    { id: '1', name: 'Remera Oversize', categoria: 'remeras', precio: 25.99, stock: 3, img: 'https://i1.adis.ws/i/boohooamplience/bmm30645_black_xl?$product_image_main_mobile_2x$&fmt=webp', descripcion: 'Remera oversize esencial para tus salidas' },
    { id: '2', name: 'Buzo Oversize', categoria: 'buzos', precio: 49.99, stock: 25, img: 'https://bronzesnake.com/cdn/shop/files/230627_BRONZE8444_1200x.jpg?v=1687829922', descripcion: 'Buzo oversize esencial para tus salidas' },
    { id: '3', name: 'Jean Clasico', categoria: 'pantalones', precio: 35.99, stock: 25, img: 'https://i1.adis.ws/i/boohooamplience/amm08242_light%20blue_xl?$product_image_main_mobile_2x$&fmt=webp', descripcion: 'Jean clasico que combina con todo' },
    { id: '4', name: 'Gafas', categoria: 'gafas', precio: 15.99, stock: 25, img: 'https://m.media-amazon.com/images/I/519FDLPhvpL._AC_SX679_.jpg', descripcion: 'Gafas para potenciar la noche' }
]

export const getProducts = () => {
    return new Promise((resolve) => { setTimeout(() => { resolve(products) }, 300) })
}

export const getProductsByCategoria = (categoriaId) => {
    return new Promise((resolve) => 
    {setTimeout(() => {
        resolve(products.map(prod => prod.categoria === categoriaId))
    }, 300)})
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => 
    {setTimeout(() => {
        resolve(products.find(prod => prod.id === productId))
    }, 300)})
}
const products = [
    { id: '1', name: 'Remera Oversize', categoria: 'remeras', precio: 25.99, stock: 3, img: 'https://i1.adis.ws/i/boohooamplience/bmm30645_black_xl?$product_image_main_mobile_2x$&fmt=webp', descripcion: 'Remera oversize esencial para tus salidas 😎' },
    { id: '2', name: 'Buzo Oversize', categoria: 'buzos', precio: 49.99, stock: 25, img: 'https://bronzesnake.com/cdn/shop/files/230627_BRONZE8444_1200x.jpg?v=1687829922', descripcion: 'Buzo oversize esencial para tus salidas' },
    { id: '3', name: 'Jean Clasico', categoria: 'pantalones', precio: 35.99, stock: 25, img: 'https://i1.adis.ws/i/boohooamplience/amm08242_light%20blue_xl?$product_image_main_mobile_2x$&fmt=webp', descripcion: 'Jean clasico que combina con todo' },
    { id: '4', name: 'Gafas', categoria: 'gafas', precio: 15.99, stock: 25, img: 'https://m.media-amazon.com/images/I/519FDLPhvpL._AC_SX679_.jpg', descripcion: 'Gafas para potenciar la noche' }, 
    { id: '5', name: 'Remera Oversize Stripe', categoria: 'remeras', precio: 25.99, stock: 5, img: 'https://bronzesnake.com/cdn/shop/files/230627_BRONZE_10183_1200x.jpg?v=1695171332', descripcion: 'Remera oversize stripe para variar!' },
    { id: '6', name: 'Buzo Oversize Comfort', categoria: 'buzos', precio: 49.99, stock: 25, img: 'https://bronzesnake.com/cdn/shop/products/20230404_BronzeSnakeShop1064_3200x.jpg?v=1680584992', descripcion: 'Buzo oversize comfort para cualquier situacion' },
    { id: '7', name: 'Buzo Oversize Box', categoria: 'buzos', precio: 49.99, stock: 25, img: 'https://bronzesnake.com/cdn/shop/products/81A5965_fullres-QuickPreset_1333x2000_062570bd-5ebb-4a4d-a366-c4e965541369_2000x.jpg?v=1681338708', descripcion: 'Buzo oversize Box de polyester' }
]

export const getProducts = () => {
    return new Promise((resolve) => { setTimeout(() => { resolve(products) }, 300) })
}

export const getProductsByCategoria = (categoriaId) => {
    return new Promise((resolve) => 
    {setTimeout(() => {
        resolve(products.filter(prod => prod.categoria === categoriaId))
    }, 1000)})
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => 
    {setTimeout(() => {
        resolve(products.find(prod => prod.id === productId))
    }, 1000)})
}
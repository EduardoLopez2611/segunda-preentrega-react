const products = [
    {id: "1" , nombre: "Zapatilla", img:"/public/img/zapatillas4.jpg" , precio: 15000, categoria:"calzados" , descripcion: "Un par de zapatillas", stock: 10 },
    {id: "2" , nombre: "Remera", img:"/public/img/remeras.jpg" , precio: 12000, categoria:"ropa" , descripcion: "Una remera" , stock: 10 },
    {id: "3" , nombre: "Pantalón", img: "/public/img/pantalones.jpg", precio: 13000, categoria:"ropa" , descripcion: "Un pantalón" , stock: 10 },
    {id: "4" , nombre: "Short", img:"/public/img/shorts3.jpg" , precio: 5000, categoria:"ropa" , descripcion: "Un short" , stock: 10 },
    {id: "5" , nombre: "Ojota", img:"/public/img/ojotas.jpg" , precio: 10000, categoria: "calzados", descripcion: "Un par de ojotas" , stock: 10 },
    {id: "6" , nombre: "Camiseta", img:"/public/img/camisetas-de-futbol.jpg", precio: 9000, categoria:"ropa" , descripcion: "Una camiseta" , stock: 10 },
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
        setTimeout(() => {
            resolve(products);
        }, 2000);
        } else {
        reject("No hay productos disponibles");
        }
    });
    };

    export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
        const product = products.find( p => p.id === id);
        
        setTimeout(() => {
            if(!product) {
            reject(`No se han encontrado productos con el id ${id}`)
            }
            resolve(product);
        }, 2000);
        } else {
        reject("No hay productos");
        }
    });
    };
import burguer1 from "../../img/burger2.png"
import burguer2 from "../../img/burgguer8.png"
import bebida1 from "../../img/coctel1.png"
import bebida2 from "../../img/coctel2.png"
import guarnicion1 from "../../img/62fc0c5b0db6d.png"
const products =[
    {
        id: "1",
        name: "Hamburguesa",
        price: "2500",
        category: "hamburguesas",
        img:  burguer1 ,
        stock: 10,
        description: "Wuper Jr"
    },
    {
        id: "2",
        name: "Hamburguesa2",
        price: "2750",
        category: "hamburguesas",
        img:  burguer2 ,
        stock: 10,
        description: "Bk Simple"
    },
    {
        id: "3",
        name: "bebida1",
        price: "1400",
        category: "bebidas",
        img: bebida1 ,
        stock: 10,
        description: "Martini"
    },
    {
        id:"4",
        name: "bedida2",
        price: "1650",
        category:"bebidas",
        img: bebida2,
        stock:10,
        description:"Mojito"
    },
    {
        id:"5",
        name: "guarnicion1 ",
        price: "950",
        category:"guarnicion",
        img: guarnicion1,
        stock:10,
        description:"Papas fritas"
    },
   
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}
export const getProductsByCategory = (categoryId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))

        }, 500)

    })

};

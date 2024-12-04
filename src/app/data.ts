type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
    {
        id: 1,
        title: "Mango Sago",
        desc: "Fresh mango blended yakult, topped off with a scoop of mango popping boba",
        img: "/temporary/f1.png",
        price: 6,
        options: [
            {
                title: "Regular",
                additionalPrice: 6,
            },
            {
                title: "Large",
                additionalPrice: 7,
            },
        ],
    },
    {
        id: 2,
        title: "Pineapple Sago",
        desc: "Fresh pineapple blended yakult, topped off with a scoop of pineapple popping boba",
        img: "/temporary/f2.png",
        price: 6,
        options: [
            {
                title: "Regular",
                additionalPrice: 6,
            },
            {
                title: "Large",
                additionalPrice: 7,
            },
        ],
    },
    {
        id: 3,
        title: "Blueberry Sago",
        desc: "Fresh blueberry blended yakult, topped off with another scoop of blueberries",
        img: "/temporary/f3.png",
        price: 6,
        options: [
            {
                title: "Regular",
                additionalPrice: 6,
            },
            {
                title: "Large",
                additionalPrice: 7,
            },
        ],
    },
    {
        id: 4,
        title: "Jasmine Milk Green Tea",
        desc: "Jasmine green tea carefully blended into our signature house milk topped off with a scoop of our honey boba",
        img: "/temporary/f4.png",
        price: 6,
        options: [
            {
                title: "Regular",
                additionalPrice: 6,
            },
            {
                title: "Large",
                additionalPrice: 7,
            },
        ],
    },
    {
        id: 5,
        title: "Strawberry Sprite",
        desc: "Strawberry infused ade with a scoop of our handmade strawberry flavored boba. Perfect to cool down during summer!",
        img: "/temporary/f5.png",
        price: 6,
        options: [
            {
                title: "Regular",
                additionalPrice: 6,
            },
            {
                title: "Large",
                additionalPrice: 7,
            },
        ],
    },
]
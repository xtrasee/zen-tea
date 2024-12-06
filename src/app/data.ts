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
        price: 5,
        options: [
            {
                title: "Regular",
                additionalPrice: 0,
            },
            {
                title: "Large",
                additionalPrice: 2,
            },
        ],
    },
    {
        id: 2,
        title: "Pineapple Sago",
        desc: "Fresh pineapple blended yakult, topped off with a scoop of pineapple popping boba",
        img: "/temporary/f2.png",
        price: 5,
        options: [
            {
                title: "Regular",
                additionalPrice: 0,
            },
            {
                title: "Large",
                additionalPrice: 2,
            },
        ],
    },
    {
        id: 3,
        title: "Blueberry Sago",
        desc: "Fresh blueberry blended yakult, topped off with another scoop of blueberries",
        img: "/temporary/f3.png",
        price: 5,
        options: [
            {
                title: "Regular",
                additionalPrice: 0,
            },
            {
                title: "Large",
                additionalPrice: 2,
            },
        ],
    },
    {
        id: 4,
        title: "Jasmine Milk Green Tea",
        desc: "Jasmine green tea carefully blended into our signature house milk topped off with a scoop of our honey boba",
        img: "/temporary/f4.png",
        price: 5,
        options: [
            {
                title: "Regular",
                additionalPrice: 0,
            },
            {
                title: "Large",
                additionalPrice: 2,
            },
        ],
    },
    {
        id: 5,
        title: "Strawberry Sprite",
        desc: "Strawberry infused ade with a scoop of our handmade strawberry flavored boba. Perfect to cool down during summer!",
        img: "/temporary/f5.png",
        price: 5,
        options: [
            {
                title: "Regular",
                additionalPrice: 0,
            },
            {
                title: "Large",
                additionalPrice: 2,
            },
        ],
    },
];

type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
}[];

export const menu: Menu = [
    {
        id: 1,
        slug: 'Yukults',
        title: "Yakult Drinks",
        desc: "Savor the sweet and tart taste of our fresh fruits blended with our signature yakult",
        img: "/temporary/f1.png",
        color: '#fff7ed',
    },
    {
        id: 2,
        slug: 'Milk Teas',
        title: "Signature Milk Teas",
        desc: "Savor the sweet and tart taste of our fresh fruits blended with our signature yakult",
        img: "/temporary/f4.png",
        color: '#ffedd5',
    },
    {
        id: 3,
        slug: 'Fruit Teas',
        title: "Summer Fruit Teas",
        desc: "Savor the sweet and tart taste of our fresh fruits blended with our signature yakult",
        img: "/temporary/f5.png",
        color: '#fdba74',
    },
]

export const yakults: Products = [
    {
        id: 1,
        title: "Mango Sago",
        desc: "Fresh mango blended yakult, topped off with a scoop of mango popping boba",
        img: "/temporary/f1.png",
        price: 5,
        options: [
            {
                title: "Regular",
                additionalPrice: 0,
            },
            {
                title: "Large",
                additionalPrice: 2,
            },
        ],
    },
    {
        id: 2,
        title: "Pineapple Sago",
        desc: "Fresh pineapple blended yakult, topped off with a scoop of pineapple popping boba",
        img: "/temporary/f2.png",
        price: 5,
        options: [
            {
                title: "Regular",
                additionalPrice: 0,
            },
            {
                title: "Large",
                additionalPrice: 2,
            },
        ],
    },
    {
        id: 3,
        title: "Blueberry Sago",
        desc: "Fresh blueberry blended yakult, topped off with another scoop of blueberries",
        img: "/temporary/f3.png",
        price: 5,
        options: [
            {
                title: "Regular",
                additionalPrice: 0,
            },
            {
                title: "Large",
                additionalPrice: 2,
            },
        ],
    },
]

export const singleProduct: Product = {
    id: 1,
    title: "Mango Sago",
    desc: "Fresh mango blended yakult, topped off with a scoop of mango popping boba",
    img: "/temporary/f1.png",
    price: 5,
    options: [
        {
            title: "Regular",
            additionalPrice: 0,
        },
        {
            title: "Large",
            additionalPrice: 2,
        },
    ]
    
}
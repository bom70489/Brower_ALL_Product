import img1 from './23bfa774eb503426d3278247aa6aaae3.jpg'

export type Product = {
    id : number
    img : string
    name : string
    desc : string
    price : number
}

export const products : Product[] = [
    {
        id: 1,
        img: img1,
        name : "Teddy bear",
        desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, odit hic. Obcaecati quisquam ipsum dolorem esse quo, officiis iure inventore voluptas itaque enim aliquid, sunt at non odio autem facilis placeat unde ea voluptatum? Natus quis optio dolor eos sit?",
        price : 100,
    },
    {
        id: 2,
        img: img1,
        name : "Teddy bear",
        desc : "This is a teddy bear",
        price : 100,
    },
    {
        id: 3,
        img: img1,
        name : "Teddy bear",
        desc : "This is a teddy bear",
        price : 100,
    },
    {
        id: 4,
        img: img1,
        name : "Teddy bear",
        desc : "This is a teddy bear",
        price : 100,
    },
    {
        id: 5,
        img: img1,
        name : "Teddy bear",
        desc : "This is a teddy bear",
        price : 100,
    },
]
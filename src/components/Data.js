import tShirtFront from '../assets/t-shirt_f.png';
import tShirtBack from '../assets/T-shirt_b.png';
import bracelet1 from '../assets/image 10.png';
import bracelet2 from '../assets/img2.jpeg';
import tShirtLeadershipFront from '../assets/t-shirt_f.png';
import tShirtLeadershipBack from '../assets/T-shirt_b.png';
import braceletUnity1 from '../assets/image 10.png';
import braceletUnity2 from '../assets/img2.jpeg';
import tShirtImpactFront from '../assets/t-shirt_f.png';
import tShirtImpactBack from '../assets/T-shirt_b.png';

const products = [
    {
        id: 1,
        name: "2024 Aiesec Ruspina T-Shirt",
        description: "With Global leaders Logo - Space Gray - white and black",
        price: 45,
        discountPrice: 55,
        discount: "20% OFF",
        colors: [
            { id: 1, name: 'Gray', colorCode: '#B0B0B0' },
            { id: 2, name: 'Silver', colorCode: '#D3D3D3' },
            { id: 3, name: 'Black', colorCode: '#000000' },
            { id: 4, name: 'White', colorCode: '#FFFFFF' }
        ],
        sizes: ["S", "M", "L", "XL"],
        images: [
            tShirtFront,
            tShirtBack,
            tShirtFront,
            tShirtBack,
            tShirtFront
        ],
        sku: "A264671",
        availability: "In Stock",
        brand: "Ruspina",
        category: "T-Shirt",
        descriptionLong: `Introducing the ultimate AIESEC Bracelet by the Ruspina Local Committee. This elegantly crafted accessory is more than just a bracelet – it’s a symbol of unity, leadership, and global impact. Made with premium materials, this bracelet combines style, durability, and meaning, making it the perfect addition to any AIESEC member’s collection.
        A Connection to the Global Community: Wearing the Ruspina Local Committee’s AIESEC Bracelet connects you to a network of like-minded individuals around the world. It’s a statement of your commitment to global exchange, cultural understanding, and making a positive impact in your community.`
    },
    {
        id: 2,
        name: "2024 Aiesec Global Bracelet",
        description: "With Global leaders Logo - Silver and Black",
        price: 25,
        discountPrice: 30,
        discount: "15% OFF",
        colors: [
            { id: 1, name: 'Silver', colorCode: '#C0C0C0' },
            { id: 2, name: 'Black', colorCode: '#000000' }
        ],
        images: [
            bracelet1,
            bracelet2
        ],
        sku: "B127845",
        availability: "In Stock",
        brand: "Global Leaders",
        category: "Bracelet",
        descriptionLong: `A sleek and modern bracelet that embodies the spirit of AIESEC. Wear it to show your commitment to global leadership and cultural exchange.`
    },
    {
        id: 3,
        name: "2024 Aiesec Leadership T-Shirt",
        description: "With Global leaders Logo - Navy Blue - white and gold",
        price: 50,
        discountPrice: 60,
        discount: "17% OFF",
        colors: [
            { id: 1, name: 'Navy Blue', colorCode: '#000080' },
            { id: 2, name: 'White', colorCode: '#FFFFFF' },
            { id: 3, name: 'Gold', colorCode: '#FFD700' }
        ],
        sizes: ["S", "M", "L", "XL"],
        images: [
            tShirtLeadershipFront,
            tShirtLeadershipBack
        ],
        sku: "A371569",
        availability: "In Stock",
        brand: "Ruspina",
        category: "T-Shirt",
        descriptionLong: `A premium T-shirt that celebrates leadership and global impact. Made with high-quality materials for comfort and style.`
    },
    {
        id: 4,
        name: "2024 Aiesec Unity Bracelet",
        description: "With Global leaders Logo - Gold and Black",
        price: 30,
        discountPrice: 35,
        discount: "14% OFF",
        colors: [
            { id: 1, name: 'Gold', colorCode: '#FFD700' },
            { id: 2, name: 'Black', colorCode: '#000000' }
        ],
        images: [
            braceletUnity1,
            braceletUnity2
        ],
        sku: "B248571",
        availability: "In Stock",
        brand: "Unity",
        category: "Bracelet",
        descriptionLong: `A bracelet that symbolizes unity and togetherness. Wear it to show your support for global peace and understanding.`
    },
    {
        id: 5,
        name: "2024 Aiesec Impact T-Shirt",
        description: "With Global leaders Logo - Green and White",
        price: 40,
        discountPrice: 50,
        discount: "20% OFF",
        colors: [
            { id: 1, name: 'Green', colorCode: '#008000' },
            { id: 2, name: 'White', colorCode: '#FFFFFF' }
        ],
        sizes: ["S", "M", "L", "XL"],
        images: [
            tShirtImpactFront,
            tShirtImpactBack
        ],
        sku: "A462789",
        availability: "In Stock",
        brand: "Impact",
        category: "T-Shirt",
        descriptionLong: `An impactful T-shirt for those who are making a difference in the world. Show your commitment to global impact with this stylish and comfortable shirt.`
    }
];

export default products;

import mock from "../mock";
import { sub } from "date-fns";
import { Chance } from "chance";

const chance = new Chance();

const LatestReviewsData = [
  {
    pimage: "/images/products/product-5.png",
    pname: "iPhone 13 pro max-Pacific Blue-128GB storage",
    cname: "Arlene McCoy",
    email: "macoy@arlene.com",
    rating: 3,
    stock: true,
    photo: "/images/profile/user1.jpg",    
    id: 1,
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    pimage: "/images/products/product-6.png",
    pname: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
    cname: "Jerome Bell",
    email: "belljerome@yahoo.com",
    rating: 3,
    stock: false,
    photo: "/images/profile/user2.jpg",
    id: 2,
    created: sub(new Date(), { days: 10, hours: 8, minutes: 69 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    pimage: "/images/products/product-7.png",
    pname: "PlayStation 5 DualSense Wireless Controller",
    cname: "Jacob Jones",
    email: "jones009@hotmail.com",
    rating: 3,
    stock: true,
    photo: "/images/profile/user3.jpg",
    id: 3,
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    pimage: "/images/products/product-8.png",
    pname: "Amazon Basics Mesh, Mid-Back, Swivel Office De...",
    cname: "Annette Black",
    email: "blackanne@yahoo.com",
    rating: 3,
    stock: true,
    photo: "/images/profile/user4.jpg",
    id: 4,
    created: sub(new Date(), { days: 4, hours: 9, minutes: 40 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    pimage: "/images/products/product-9.png",
    pname: "Sony X85J 75 Inch Sony 4K Ultra HD LED Smart G...",
    cname: "Albert Flores",
    email: "albertflo9@gmail.com",
    rating: 3,
    stock: false,
    photo: "/images/profile/user5.jpg",
    id: 5,
    created: sub(new Date(), { days: 2, hours: 5, minutes: 50 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    pimage: "/images/products/product-5.png",
    pname: "iPhone 13 pro max-Pacific Blue-128GB storage",
    cname: "Arlene McCoy",
    email: "macoy@arlene.com",
    rating: 3,
    stock: true,
    photo: "/images/profile/user1.jpg",    
    id: 6,
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
 
  {
    pimage: "/images/products/product-7.png",
    pname: "PlayStation 5 DualSense Wireless Controller",
    cname: "Jacob Jones",
    email: "jones009@hotmail.com",
    rating: 3,
    stock: true,
    photo: "/images/profile/user3.jpg",
    id: 8,
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    pimage: "/images/products/product-6.png",
    pname: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
    cname: "Jerome Bell",
    email: "belljerome@yahoo.com",
    rating: 3,
    stock: false,
    photo: "/images/profile/user2.jpg",
    id: 7,
    created: sub(new Date(), { days: 10, hours: 8, minutes: 69 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    pimage: "/images/products/product-9.png",
    pname: "Sony X85J 75 Inch Sony 4K Ultra HD LED Smart G...",
    cname: "Albert Flores",
    email: "albertflo9@gmail.com",
    rating: 3,
    stock: false,
    photo: "/images/profile/user5.jpg",
    id: 10,
    created: sub(new Date(), { days: 2, hours: 5, minutes: 50 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    pimage: "/images/products/product-8.png",
    pname: "Amazon Basics Mesh, Mid-Back, Swivel Office De...",
    cname: "Annette Black",
    email: "blackanne@yahoo.com",
    rating: 3,
    stock: true,
    photo: "/images/profile/user4.jpg",
    id: 9,
    created: sub(new Date(), { days: 4, hours: 9, minutes: 40 }),
    description: chance.paragraph({ sentences: 2 }),
  },
];

mock.onGet("/api/data/dashboard/LatestReviewsData").reply(() => {
  return [200, LatestReviewsData];
});

export default LatestReviewsData;
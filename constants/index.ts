export const API_URL = '';
export const APP_NAME = 'ALX Listing App';
import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Sea View Apartment",
    rating: 4.7,
    address: { city: "Casablanca", country: "Morocco" },
    image: "/images/property1.jpg",
    images: [
      "/images/property1.jpg",
      "/images/property2.jpg",
      "/images/property3.jpg"
    ],
    description: "Spacious apartment with ocean view.",
    category: ["Wifi", "Parking", "Kitchen", "Washer"],
    price: 100,
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/user1.jpg",
        rating: 5,
        comment: "Amazing stay!"
      },
      {
        name: "Jane Smith",
        avatar: "/images/user2.jpg",
        rating: 4,
        comment: "Very comfortable and clean."
      }
    ]
  }
];

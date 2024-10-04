import { IListing } from "@/types";

export const properties: IListing[] = [
  {
    id: 1,
    title: "Cozy Apartment in the City Center",
    description: "A comfortable and stylish apartment located in the heart of the city.",
    featuredImg: "/assets/slide-1.jpeg",
    galleryImg: ["/assets/slide-2.jpeg"],
    roomCount: 2,
    bathroomCount: 1,
    guestCount: 4,
    price: 15,
    location: 'Uttara, Dhaka',
    isSaved: true,
    latitude: 23.873751,
    longitude: 90.396454,
  },
  {
    id: 3,
    title: "Downtown Loft with City View",
    description: "A trendy loft with stunning views of the city skyline.",
    featuredImg: "/assets/slide-3.jpeg",
    galleryImg: ["/assets/slide-4.jpeg"],
    roomCount: 1,
    bathroomCount: 1,
    guestCount: 2,
    price: 12,
    location: 'Chakbazar, Chattogram',
    isSaved: true,
    latitude: 22.3518,
    longitude: 91.8331,
  },
]

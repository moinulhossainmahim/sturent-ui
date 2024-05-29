import { ICategory } from "./Category";
export interface IListing {
  id: number;
  title: string;
  description: string;
  featuredImg: string;
  galleryImg: string[];
  category?: ICategory;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  price: number;
  location: string;
  isSaved: boolean;
  latitude: number;
  longitude: number;
}

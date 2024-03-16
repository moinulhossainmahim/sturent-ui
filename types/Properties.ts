import { Area } from "./Area";
import { IFeature } from "./Feature";
import { IUniversity } from "./University";

export interface ICreatePropertyFormData {
  category: string;
  roomCount: number;
  bathroomCount: number;
  price: string;
  title: string;
  description: string;
  sqft: string;
  city: string;
  area: string;
  sector: string;
  road: string;
  house: string;
  features: number[];
  images: File[];
  universities: number[];
}

export interface IProperty {
  id: number,
  category: string;
  roomCount: number;
  bathroomCount: number;
  price: string;
  title: string;
  description: string;
  sqft: string;
  area: Area;
  sector: string;
  road: string;
  house: string;
  features: IFeature[];
  images: string[];
  universities: IUniversity[];
}

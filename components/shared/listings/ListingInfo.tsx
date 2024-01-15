'use client';

import { IconType } from "react-icons";
import { FaBed, FaBath } from "react-icons/fa6";
import { MdCameraRear, MdAllInbox } from "react-icons/md";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

interface ListingInfoProps {
  description?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  category?: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  locationValue?: string;
  img: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  description = '',
  guestCount = 1,
  roomCount = 1,
  bathroomCount = 1,
  category,
  img
}) => {

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 w-3/4">
        <h1 className="text-2xl font-bold">BDT 80 Thousand</h1>
        <h4 className="text-md font-medium">Sector 3, Uttara, Dhaka</h4>
        <div className="flex gap-7">
          <div className="flex gap-1 items-center">
            <FaBed size={20} />
            <span>3 Beds</span>
          </div>
          <div className="flex gap-1 items-center">
            <FaBath size={20} />
            <span>4 Baths</span>
          </div>
          <div className="flex gap-1 items-center">
            <MdAllInbox size={20} />
            <span>2,180 sqft</span>
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <h2>Subscribe card!</h2>
        <h2>Under construction</h2>
      </div>
    </div>
   );
}

export default ListingInfo;

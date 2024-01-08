'use client';

import { IconType } from "react-icons";

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
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl
            font-semibold
            flex
            flex-row
            items-center
            gap-2
          "
        >
          <div>Hosted by Eamin Tebu</div>
          <Avatar src={img} />
        </div>
        <div className="
            flex
            flex-row
            items-center
            gap-4
            font-light
            text-neutral-500
          "
        >
          <div>
            {guestCount} guests
          </div>
          <div>
            {roomCount} rooms
          </div>
          <div>
            {bathroomCount} bathrooms
          </div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div className="
      text-lg font-light text-neutral-500">
        {description}
      </div>
    </div>
   );
}

export default ListingInfo;

'use client';

import Image from "next/image";

import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: number;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
}) => {
  return (
    <>
      <Heading
        title={title}
        subtitle={locationValue}
      />
      <div className="
          w-full
          h-[60vh]
          overflow-hidden
          rounded-xl
          relative
        "
      >
        <Image
          src={imageSrc}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton
            listingId={id}
          />
        </div>
      </div>
    </>
   );
}

export default ListingHead;
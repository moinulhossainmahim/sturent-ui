'use client';

import { IListing } from "@/types";
import Container from "@/components/shared/Container";
import ListingInfo from "@/components/shared/listings/ListingInfo";
import Image from "next/image";
import Heading from "@/components/shared/Heading";

interface ListingClientProps {
  listing: IListing;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
}) => {
  return (
    <Container>
      <div
        className="
          max-w-[90%]
          md:max-w-[80%]
          m-auto
          pt-[120px]
        "
      >
        <div className="flex flex-col gap-2">
          <Heading title={listing.title} subtitle={listing.location} />
          <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2 h-[60vh] transition-all">
            {listing.galleryImg.map((img, index) => (
              <div key={index} className={`details-img ${index === 0 ? `row-span-2` : ''}`}>
                <Image
                  height={100}
                  width={100}
                  src={img}
                  alt={img}
                  style={{ width: '100%', height: '100%' }}
                  className="rounded-lg hover:bg-gray-50"
                />
              </div>
            ))}
          </div>
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-7
              md:gap-10
              mt-6
            "
          >
            <ListingInfo
              category={listing.category}
              description={listing?.description}
              roomCount={listing?.roomCount}
              guestCount={listing?.guestCount}
              bathroomCount={listing?.bathroomCount}
              locationValue={listing.location}
              img={listing.featuredImg}
            />
            <div
              className="
                order-first
                mb-10
                md:order-last
                md:col-span-3
              "
            >
            </div>
          </div>
        </div>
      </div>
    </Container>
   );
}

export default ListingClient;
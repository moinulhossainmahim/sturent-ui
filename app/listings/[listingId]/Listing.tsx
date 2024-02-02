import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

import { IListing } from "@/types";
import Container from "@/components/shared/Container";
import ListingInfo from "@/components/shared/listings/ListingInfo";
import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";

interface ListingClientProps {
  listing: IListing;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
}) => {
  return (
    <Container>
      <div className="max-w-[90%] md:max-w-[80%] m-auto pt-[120px]">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Heading title={listing.title} />
            <Button>
              <FaRegHeart className='mr-2 h-4 w-4' /> Save
            </Button>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2 transition-all">
            {listing.galleryImg.map((img, index) => (
              <div
                key={index}
                className={
                  `
                  ${index === 0 ? `row-span-2` : ''}
                  shadow-sm rounded group cursor-pointer overflow-hidden`
                }
              >
                <Image
                  height={100}
                  width={100}
                  src={img}
                  alt={img}
                  style={{ width: '100%', height: '100%' }}
                  className="rounded-l group-hover:scale-105 object-cover transition"
                />
              </div>
            ))}
          </div>
          <ListingInfo
            category={listing.category}
            description={listing?.description}
            roomCount={listing?.roomCount}
            guestCount={listing?.guestCount}
            bathroomCount={listing?.bathroomCount}
            locationValue={listing.location}
            img={listing.featuredImg}
          />
        </div>
      </div>
    </Container>
   );
}

export default ListingClient;

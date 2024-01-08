'use client';

import { IListing } from "@/types";
import Container from "@/components/shared/Container";
import ListingHead from "@/components/shared/listings/ListingHead";
import ListingInfo from "@/components/shared/listings/ListingInfo";

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
          max-w-screen-lg
          mx-auto
          pt-[120px]
        "
      >
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing?.title || ''}
            imageSrc={listing.featuredImg}
            locationValue={listing.location}
            id={listing?.id || 1}
          />
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
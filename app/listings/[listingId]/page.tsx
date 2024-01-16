import { listings } from "@/test-data/listings";
import Listing from "./Listing";

interface IParams {
  listingId: number;
}

const page = async (
  { params }: { params: IParams }
) => {
  const listing = listings.find((listing) => listing.id == params.listingId) || {
    id: 2,
    title: '',
    description: '',
    featuredImg: '',
    galleryImg: [],
    roomCount: 2,
    bathroomCount: 1,
    guestCount: 4,
    price: 150,
    location: '',
    isSaved: false,
  };
  return (
    <Listing
      listing={listing}
    />
  )
}

export default page

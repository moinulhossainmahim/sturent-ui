import Listing from "./Listing";

interface IParams {
  listingId: number;
}

const page = async (
  { params }: { params: IParams }
) => {
  return (
    <Listing
      id={params.listingId}
    />
  )
}

export default page

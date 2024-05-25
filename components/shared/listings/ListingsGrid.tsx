import { listings } from "@/test-data/listings";
import ListingCard from "./ListingCard";

const ListingsGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          data={listing}
        />
      ))}
    </div>
  )
}

export default ListingsGrid;

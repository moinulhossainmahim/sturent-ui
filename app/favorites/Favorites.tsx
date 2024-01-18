import Heading from "@/components/shared/Heading";
import ListingCard from "@/components/shared/listings/ListingCard";
import { favoriteListings } from "@/test-data/favorite-listings";
import { IListing } from "@/types";

const Favorites = () => {
  return (
    <div className="py-8">
      <Heading
        title="Favorites"
        subtitle="List of places you favorited!"
      />
      <div
        className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
          "
      >
        {favoriteListings.map((listing: IListing) => (
          <ListingCard
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites;

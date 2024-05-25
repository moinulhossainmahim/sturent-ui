import ListingCard from "@/components/shared/listings/ListingCard";
import { listings } from "@/test-data/listings";
import Filters from "../filters";

const Home = () => {
  return (
    <div className="flex w-full pt-[2rem] gap-12 flex-col md:flex-row md:items-start items-center">
      <div className="w-[100%] sm:w-[80%] md:w-[35%] lg:w-[25%] p-6 h-full border-muted border rounded-lg shadow-xl">
        <Filters />
      </div>
      <div className="w-[100%] md:w-[65%] lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </div>
  )
}

export default Home;

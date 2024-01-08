import Container from "@/components/shared/Container";
import ListingCard from "@/components/shared/listings/ListingCard";
import { listings } from "@/test-data/listings";

export default function Home() {
  return (
    <Container>
      <div
        className="
        pt-[12rem]
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
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
          />
          ))}
      </div>
    </Container>
  )
}

'use client';

import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import ListingCard from "@/components/shared/listings/ListingCard";
import { properties } from "@/test-data/properties";

const Properties = () => {
  return (
    <Container>
      <div className="py-8">
        <Heading
          title="Properties"
          subtitle="List of your properties"
          />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {properties.map((listing: any) => (
            <ListingCard
              key={listing.id}
              data={listing}
              actionId={listing.id}
              actionLabel="Delete property"
              onAction={() => {}}
            />
          ))}
        </div>
      </div>
    </Container>
   );
}

export default Properties;

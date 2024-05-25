'use client';

import { listings } from "@/test-data/listings";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ListingsList = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-10">
      {listings.map((listing) => (
        <div className="flex flex-col gap-8 lg:flex-row" key={listing.id}>
          <div className="rounded-lg">
            <Image
              src={listing.featuredImg}
              alt={listing.title}
              height={500}
              width={500}
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div>
              <h4 className="text-lg font-semibold">{listing.title}</h4>
              <h4 className="text-lg font-semibold text-primary">
                &#2547;{listing.price}k Month
              </h4>
            </div>
            <p className="leading-7">
              {listing.description.length > 100 ? listing.description.substring(0, 100) + '...' : listing.description}
            </p>
            <div>
              <Button onClick={() => router.push(`/listings/${listing.id}`)}>See Details</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListingsList;

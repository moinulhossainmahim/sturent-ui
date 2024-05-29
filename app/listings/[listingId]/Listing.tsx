'use client';

import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { Gallery, Item } from 'react-photoswipe-gallery';

import 'photoswipe/dist/photoswipe.css'

import Container from "@/components/shared/Container";
import ListingInfo from "@/components/shared/listings/ListingInfo";
import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import { listings } from "@/test-data/listings";
import { useGetSinglePropertyQuery } from "@/redux/features/properties/propertiesApiSlice";

interface ListingClientProps {
  id: number;
}

const ListingClient: React.FC<ListingClientProps> = ({
  id,
}) => {

  const listing = listings.find((listing) => listing.id == id) || {
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
    latitude: 0,
    longitude: 0,
  };
  const { data, isFetching } = useGetSinglePropertyQuery(id);

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
            <Gallery>
              {listing.galleryImg.map((img, index) => (
                <div
                  key={index}
                  className={
                    `
                    ${index === 0 ? `row-span-2` : ''}
                    shadow-sm rounded group cursor-pointer overflow-hidden`
                  }
                >
                  <Item original={img} thumbnail={img} width='1024' height='768'>
                  {({ ref, open }) => (
                    <Image
                      className="rounded-l group-hover:scale-105 object-cover transition"
                      ref={ref}
                      onClick={open}
                      height={100}
                      width={100}
                      src={img}
                      alt={img}
                      style={{ width: '100%', height: '100%' }}
                    />
                  )}
                  </Item>
                </div>
              ))}
            </Gallery>
          </div>
          <ListingInfo
            listing={listing}
          />
        </div>
      </div>
    </Container>
   );
}

export default ListingClient;

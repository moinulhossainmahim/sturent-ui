'use client';

import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";

import { listings } from "@/test-data/listings";

interface HeartButtonProps {
  listingId: number
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
}) => {
  const [newListings, setNewListings] = useState(listings);
  const listing = newListings.find((listing) => listing.id === listingId);

  const toggleFavourite = (listingId: number) => {
    if (listing?.isSaved) toast.success('Removed from wishlist', { autoClose: 1000 });
    else toast.success('Added to wishlist', { autoClose: 1000 });
    setNewListings((prevListings) => prevListings.map((listing) => {
       if (listing.id === listingId) {
        return { ...listing, isSaved: !(listing.isSaved) }
       } else {
        return listing;
       }
    }))
  }

  return (
    <div
      onClick={(e) => {
        toggleFavourite(listing?.id || 0)
        e.stopPropagation();
      }}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart
        size={24}
        className={
          listing?.isSaved ? 'fill-rose-500' : 'fill-neutral-500/70'
        }
      />
    </div>
   );
}

export default HeartButton;
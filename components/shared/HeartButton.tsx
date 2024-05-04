'use client';

import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";

import { listings } from "@/test-data/listings";
import { useAddToFavoriteMutation, useRemoveFromFavoriteMutation } from "@/redux/features/favorites/favoritesApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "@/redux/store";
import { ModalKey, setModal } from "@/redux/features/modals/modalSlice";

interface HeartButtonProps {
  listingId: number
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
}) => {
  const dispatch = useDispatch();
  const [newListings, setNewListings] = useState(listings);
  const [addToFavorites, addToFavoritesResult] = useAddToFavoriteMutation();
  const [removeFromFavorites, removeFromFavoritesResult] = useRemoveFromFavoriteMutation();
  const { isAuthenticated } = useSelector((state: ReduxStore) => state.auth);

  const listing = newListings.find((listing) => listing.id === listingId);

  const toggleFavorite = (listingId: number) => {
    if(!isAuthenticated) {
      dispatch(setModal({ key: ModalKey.LoginModal, value: true }));
      return;
    }

    if (listing?.isSaved) {
      removeFromFavorites(listingId);
      toast.success('Removed from wishlist', { autoClose: 1000 });
    }
    else {
      addToFavorites(listingId);
      toast.success('Added to wishlist', { autoClose: 1000 });
    }
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
        toggleFavorite(listing?.id || 0)
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
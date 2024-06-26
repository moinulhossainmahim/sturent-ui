'use client';

import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { IoLocation } from "react-icons/io5";

import HeartButton from "../HeartButton";
import { IListing } from "@/types";
import ConfirmationModal from "../modals/ConfirmationModal";
import { useRemoveUserPropertyMutation } from "@/redux/features/properties/propertiesApiSlice";

interface ListingCardProps {
  data: IListing;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
};

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
}) => {
  const router = useRouter();
  const [deleteProperty, deletePropertyResult] = useRemoveUserPropertyMutation();

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (disabled) {
      return;
    }
    onAction?.(actionId)
  }, [disabled, onAction, actionId]);

  const handleDelete = () => {
    deleteProperty(data.id);
  };

  const primaryAction = () => {
    handleDelete();
  }

  const secondaryAction = () => {
    console.log('No');
  }

  return (
    <div
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
          "
        >
          <Image
            onClick={() => router.push(`/listings/${data.id}`)}
            fill
            className="
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
            "
            src={data.featuredImg}
            alt="Listing"
          />
          <div className="absolute top-3 right-3">
            <HeartButton
              listingId={data.id}
            />
          </div>
        </div>
        <h4 className="font-semibold text-lg">
          BDT {data.price}k Month
        </h4>
        <div className="flex flex-row items-center gap-1">
          <div className="flex gap-1 items-center">
            <IoLocation size={22} />
            <p className="text-sm">
              {data.location}
            </p>
          </div>
        </div>
        {onAction && actionLabel && (
          <ConfirmationModal primaryAction={primaryAction} secondaryAction={secondaryAction}  action='Delete Properties' />
        )}
      </div>
    </div>
   );
}

export default ListingCard;

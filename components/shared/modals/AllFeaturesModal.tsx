'use client';

import useListingFeaturesModal from "@/app/hooks/useListingFeaturesModal";
import Modal from "./Modal";
import { features } from "../listings/ListingInfo";

const AllFeaturesModal = () => {
  const featuresModal = useListingFeaturesModal();

  const bodyContent = (
    <div>
      <h1 className="text-lg font-semibold my-4">General Facilities</h1>
      <div className="flex gap-6 mb-6 flex-wrap">
        {features.map((feature) => (
          <div className="h-[8rem] w-[10rem] flex flex-col gap-2 justify-center items-center bg-accent rounded-xl" key={feature.id}>
            {<feature.icon size={25} />}
            <p>{feature.name}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <Modal
      isOpen={featuresModal.isOpen}
      onClose={featuresModal.onClose}
      title="What this place offers"
      actionLabel=""
      onSubmit={() => {}}
      body={bodyContent}
    />
  )
}

export default AllFeaturesModal;

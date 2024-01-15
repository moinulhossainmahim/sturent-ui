'use client';

import useListingFeaturesModal from "@/app/hooks/useListingFeaturesModal";
import Modal from "./Modal";

const AllFeaturesModal = () => {
  const featuresModal = useListingFeaturesModal();

  const bodyContent = (
    <h1>Hello world!</h1>
  )

  return (
    <Modal
      isOpen={featuresModal.isOpen}
      onClose={featuresModal.onClose}
      actionLabel='What this place offers'
      onSubmit={() => {}}
      body={bodyContent}
    />
  )
}

export default AllFeaturesModal;

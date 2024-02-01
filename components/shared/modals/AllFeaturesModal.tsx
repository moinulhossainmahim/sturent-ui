'use client';

import { useDispatch, useSelector } from "react-redux";

import { ReduxStore } from "@/redux/store";
import { ModalKey, setModal } from "@/redux/reducers/modal";
import { features } from "../listings/ListingInfo";
import Modal from "./Modal";

const AllFeaturesModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: ReduxStore) => state.modal.ListingFeaturesModal);

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
      isOpen={isOpen}
      onClose={() => dispatch(setModal({ key: ModalKey.ListingFeaturesModal, value: false }))}
      title="What this place offers"
      actionLabel=""
      onSubmit={() => {}}
      body={bodyContent}
    />
  )
}

export default AllFeaturesModal;

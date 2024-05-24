import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { ReduxStore } from "@/redux/store";
import ImageUpload from "./ImageUpload";
import Modal from "./Modal";
import useModalAction from "@/hooks/useModalAction";
import { ModalKey } from "@/redux/features/modals/modalSlice";

const ProfileImageUploadModal = () => {
  const [dragEnter, setDragEnter] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File>();
  const inputRef = useRef<HTMLInputElement>(null);
  const { closeModal } = useModalAction(ModalKey.UpdateProfileImageModal);
  const isOpen = useSelector((state: ReduxStore) => state.modal.UpdateProfileImageModal);

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setUploadedImage(Array.from(event.dataTransfer.files)[0]);
    setDragEnter(false);
  }

  const handleSubmit = () => {
    console.log('submitted');
  }

  useEffect(() => {
    setUploadedImage(undefined)
  }, [])

  const bodyContent = (
    <div className="w-full flex justify-center items-center flex-col gap-16">
      <ImageUpload
        dragEnter={dragEnter}
        setDragEnter={setDragEnter}
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
        inputRef={inputRef}
        handleDrop={handleDrop}
        type="front"
        heading=""
        subHeading="Drag and drop to upload profile image"
      />
    </div>
  )

  return (
    <Modal
      onSubmit={() => handleSubmit()}
      isOpen={isOpen}
      title="Update Profile Image"
      actionLabel="Update"
      secondaryActionLabel="Cancel"
      secondaryAction={closeModal}
      onClose={closeModal}
      body={bodyContent}
    />
  )
}

export default ProfileImageUploadModal;

'use client';

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import Modal from "./Modal";
import { ReduxStore } from "@/redux/store";
import useModalAction from "@/hooks/useModalAction";
import { ModalKey } from "@/redux/features/modals/modalSlice";
import ImageUpload from "./ImageUpload";

const StudentIDModal = () => {
  const [frontDragEnter, setFrontDragEnter] = useState(false);
  const [backDragEnter, setBackDragEnter] = useState(false);
  const [uploadedFrontImage, setUploadedFrontImage] = useState<File>();
  const [uploadedBackImage, setUploadedBackImage] = useState<File>();
  const frontInputRef = useRef<HTMLInputElement>(null);
  const backInputRef = useRef<HTMLInputElement>(null);
  const { closeModal } = useModalAction(ModalKey.StudentIDModal);
  const isOpen = useSelector((state: ReduxStore) => state.modal.StudentIDModal);

  function handleDrop(event: React.DragEvent<HTMLDivElement>, type: string) {
    event.preventDefault();
    if (type === 'front') {
      setUploadedFrontImage(Array.from(event.dataTransfer.files)[0]);
      setFrontDragEnter(false);
    } else {
      setUploadedBackImage(Array.from(event.dataTransfer.files)[0]);
      setBackDragEnter(false);
    }
  }

  const handleSubmit = () => {
    console.log('submitted');
  }

  useEffect(() => {
    setUploadedFrontImage(undefined)
    setUploadedBackImage(undefined)
  }, [])

  const bodyContent = (
    <div className="w-full flex justify-center items-center flex-col gap-16">
      <ImageUpload
        dragEnter={frontDragEnter}
        setDragEnter={setFrontDragEnter}
        uploadedImage={uploadedFrontImage}
        setUploadedImage={setUploadedFrontImage}
        inputRef={frontInputRef}
        handleDrop={handleDrop}
        type="front"
        heading="Upload front side of Student ID"
        subHeading="Drag and drop to upload front image"
      />
      <ImageUpload
        dragEnter={backDragEnter}
        setDragEnter={setBackDragEnter}
        uploadedImage={uploadedBackImage}
        setUploadedImage={setUploadedBackImage}
        inputRef={backInputRef}
        handleDrop={handleDrop}
        type="back"
        heading="Upload back side of Student ID"
        subHeading="Drag and drop to upload back image"
      />
    </div>
  )

  return (
    <Modal
      onSubmit={() => handleSubmit()}
      isOpen={isOpen}
      title="Update student ID"
      actionLabel="Update"
      secondaryActionLabel="Cancel"
      secondaryAction={closeModal}
      onClose={closeModal}
      body={bodyContent}
    />
  )
}

export default StudentIDModal;

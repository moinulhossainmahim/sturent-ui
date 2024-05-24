'use client';

import { Dispatch, RefObject, SetStateAction } from "react";
import classNames from 'classnames';
import { GiCancel } from 'react-icons/gi';
import { BsFillCloudArrowUpFill } from 'react-icons/bs';

import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  dragEnter: boolean;
  setDragEnter: Dispatch<SetStateAction<boolean>>;
  uploadedImage: File | undefined;
  setUploadedImage: Dispatch<SetStateAction<File | undefined>>;
  inputRef: RefObject<HTMLInputElement>;
  handleDrop: (event: React.DragEvent<HTMLDivElement>, type: string) => void;
  heading: string;
  subHeading: string;
  type?: string;
}

const ImageUpload = ({
  dragEnter,
  setDragEnter,
  uploadedImage,
  setUploadedImage,
  inputRef,
  handleDrop,
  heading,
  subHeading,
  type
} : ImageUploadProps) => {

  return (
    <div className="w-[80%] flex flex-col items-center">
      <h5 className="text-2xl font-bold mb-4">{heading}</h5>
      {uploadedImage ? (
        <div className="w-full flex justify-center items-center">
          {uploadedImage ? (
            <div className="relative w-64 h-46">
              <img
                src={URL.createObjectURL(uploadedImage)}
                alt="preview"
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                className="absolute top-0 right-0 bg-red-500 -mr-3 -mt-2 text-white rounded-full p-1"
                onClick={() => setUploadedImage(undefined)}
              >
                <GiCancel size={25} />
              </button>
            </div>
          ) : (
            <>
              {/* {avatar ? (
                <img src={typeof avatar === 'string' ? avatar : undefined} alt="profile-img" className="w-32 h-32 rounded-full object-cover" />
              ) : null} */}
            </>
          )}
        </div>
      ) : (
        <div
          className={classNames("border-2 border-dashed border-gray-300 p-4 rounded-lg w-full flex flex-col items-center gap-3", {
            "border-blue-500": dragEnter,
          })}
          onDragEnter={() => setDragEnter(true)}
          onDragLeave={() => setDragEnter(false)}
          onDragOver={(event) => event.preventDefault()}
          onDrop={(e) => handleDrop(e, type || '')}
        >
          <BsFillCloudArrowUpFill size={30}/>
          <p className="text-sm">{subHeading}</p>
          <input
            type='file'
            hidden
            accept="image/*"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(event: any) => {
              const filesArr: File[] = Array.from(event.target.files);
              setUploadedImage(filesArr[0]);
            }}
            ref={inputRef}
          />
          <Button onClick={() => inputRef.current?.click()}>
            Browse Files
          </Button>
        </div>
      )}
    </div>
  )
}

export default ImageUpload;

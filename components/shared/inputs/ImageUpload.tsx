'use client';

import { Dispatch, SetStateAction, useRef, useState } from "react";
import Image from "next/image";
import { FaCloudArrowDown } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  uploadedFiles: File[];
  setUploadedFiles: Dispatch<SetStateAction<File[]>>;
}

const ImageUpload = ({ uploadedFiles, setUploadedFiles } : ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragEnter, setDragEnter] = useState(false);

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setUploadedFiles(Array.from(event.dataTransfer.files));
    setDragEnter(false);
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <div
        className={`
          flex
          flex-col
          gap-4
          items-center
          rounded-md
          p-8 w-[80%]
          outline-2
          outline-dashed
          ${dragEnter ? 'bg-muted' : ''}
        `}
        onDragEnter={() => setDragEnter(true)}
        onDragLeave={() => setDragEnter(false)}
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        <FaCloudArrowDown size={30}/>
        <h1>Drag and drop to upload profile image</h1>
        <input
          type='file'
          hidden
          multiple
          accept="image/*"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(event: any) => {
            const filesArr: File[] = Array.from(event.target.files);
            setUploadedFiles(filesArr);
          }}
          ref={inputRef}
        />
        <Button onClick={() => inputRef.current?.click()}>Upload Files</Button>
      </div>
      {uploadedFiles.length ? (
        <div className="flex gap-6 w-full py-4 px-12 flex-wrap justify-center">
          {uploadedFiles.map((img, index) => (
            <div key={index} className="relative">
              <Image width={80} height={80} src={typeof img !== 'string' ? URL.createObjectURL(img) : img} alt={img.name} style={{ height: '70px', width: '70px', maxWidth: '100%' }} objectFit="contain" />
              <MdCancel
                size={30}
                className='absolute top-[-8px] left-[50px] text-destructive cursor-pointer font-medium'
                onClick={() => setUploadedFiles(uploadedFiles.filter((item) => item !== img) as File[])}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ImageUpload;

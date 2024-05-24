'use client';

import { useSelector } from "react-redux";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";
import { ReduxStore } from "@/redux/store";
import { ModalKey } from "@/redux/features/modals/modalSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUpdateGeneralInfoSchema, updateGeneralInfoSchema } from "@/lib/schemaTypes";
import useModalAction from "@/hooks/useModalAction";

interface UpdateGeneralInfoModalProps {
  type: 'fullName' | 'email' | 'phone';
}

const UpdateGeneralInfoModal = ({ type } : UpdateGeneralInfoModalProps) => {
  const { closeModal } = useModalAction(ModalKey.UpdateGeneralInfoModal);
  const UpdateGeneralInfoModal = useSelector((state: ReduxStore) => state.modal.UpdateGeneralInfoModal);
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
    }
  } = useForm<TUpdateGeneralInfoSchema>({
    resolver: zodResolver(updateGeneralInfoSchema),
  });

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title={`Update your ${type.charAt(0).toUpperCase() + type.slice(1)}`}
      />
      <Input
        id={type}
        label={type.charAt(0).toUpperCase() + type.slice(1)}
        disabled={false}
        register={register}
        errors={errors}
        type={type === 'phone' ? 'number' : 'text'}
      />
      {errors[type] ? (
        <p className="text-rose-500 text-sm">{errors[type]?.message}</p>
      ) : null}
    </div>
  )

  const onSubmit = (data: TUpdateGeneralInfoSchema) => {
    console.log('clicked');
    console.log(data)
  }

  return (
    <Modal
      onSubmit={handleSubmit(onSubmit)}
      isOpen={UpdateGeneralInfoModal}
      title="Update Info"
      actionLabel="Update"
      secondaryActionLabel="Cancel"
      secondaryAction={closeModal}
      onClose={closeModal}
      body={bodyContent}
    />
  )
}

export default UpdateGeneralInfoModal;

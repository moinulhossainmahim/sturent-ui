'use client';

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../inputs/Input";
import Modal from "./Modal";
import { ReduxStore } from "@/redux/store";
import { ModalKey, setModal } from "@/redux/features/modals/modalSlice";
import { TAddressSchema, addressSchema } from "@/lib/schemaTypes";

interface IAddressModalProps {
  actionType: 'update' | 'create'
}

const AddressModal = ({ actionType } : IAddressModalProps) => {
  const dispatch = useDispatch();
  const AddressModal = useSelector((state: ReduxStore) => state.modal.AddressModal);
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
    }
  } = useForm<TAddressSchema>({
    resolver: zodResolver(addressSchema),
  });

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id='city'
        label='City'
        disabled={false}
        register={register}
        errors={errors}
      />
      {errors.city ? (
        <p className="text-rose-500 text-sm">{errors.city.message}</p>
      ) : null}

      <Input
        id='state'
        label='State'
        disabled={false}
        register={register}
        errors={errors}
      />
      {errors.state ? (
        <p className="text-rose-500 text-sm">{errors.state.message}</p>
      ) : null}

      <Input
        id='sector'
        label='Sector / Block'
        disabled={false}
        register={register}
        errors={errors}
      />
      {errors.sector ? (
        <p className="text-rose-500 text-sm">{errors.sector.message}</p>
      ) : null}

      <Input
        id='road'
        label='Road'
        disabled={false}
        register={register}
        errors={errors}
        type="number"
      />
      {errors.road ? (
        <p className="text-rose-500 text-sm">{errors.road.message}</p>
      ) : null}

      <Input
        id='house'
        label='House'
        disabled={false}
        register={register}
        errors={errors}
        type="number"
      />
      {errors.house ? (
        <p className="text-rose-500 text-sm">{errors.house.message}</p>
      ) : null}
    </div>
  )

  const onSubmit = async (data: TAddressSchema) => {
    console.log(data)
  }

  return (
    <Modal
      onSubmit={handleSubmit(onSubmit)}
      isOpen={AddressModal}
      title={`${actionType.charAt(0).toUpperCase() + actionType.slice(1)}` + ' Address'}
      actionLabel={`${actionType.charAt(0).toUpperCase() + actionType.slice(1)}`}
      secondaryActionLabel="Cancel"
      secondaryAction={() => {
        dispatch(setModal({ key: ModalKey.AddressModal, value: false }))
        reset();
      }}
      onClose={() => dispatch(setModal({ key: ModalKey.AddressModal, value: false }))}
      body={bodyContent}
    />
  )
}

export default AddressModal;

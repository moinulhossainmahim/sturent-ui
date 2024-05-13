'use client';

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import { ReduxStore } from "@/redux/store";
import { ModalKey, setModal } from '@/redux/features/modals/modalSlice';
import { TSignUpSchema, signUpSchema } from "@/lib/schemaTypes";

const RegisterModal = () => {
  const dispatch = useDispatch();
  const { RegisterModal } = useSelector((state: ReduxStore) => state.modal);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: TSignUpSchema) => {
    console.log('data', data);
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome to Airbnb"
        subtitle="Create an account!"
      />
      <Input
        id="email"
        label="Email"
        disabled={false}
        register={register}
        errors={errors}
        required
      />
      {errors.email ? (
        <p className="text-rose-500 text-sm">{errors.email.message}</p>
      ) : null}
      <Input
        id="fullName"
        label="Name"
        disabled={false}
        register={register}
        errors={errors}
        required
      />
      {errors.fullName ? (
        <p className="text-rose-500 text-sm">{errors.fullName.message}</p>
      ) : null}
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={false}
        register={register}
        errors={errors}
        required
      />
      {errors.password ? (
        <p className="text-rose-500 text-sm">{errors.password.message}</p>
      ) : null}
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div
        className="
          text-popover-foreground
          text-center
          mt-4
          font-light
        "
      >
        <p>Already have an account?
          <span
            onClick={() => {
              dispatch(setModal({ key: ModalKey.LoginModal, value: true }))
              dispatch(setModal({ key: ModalKey.RegisterModal, value: false }));
            }}
            className="
              text-popover-foreground
              cursor-pointer
              hover:underline
            "
            > Log in</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={false}
      onSubmit={handleSubmit(onSubmit)}
      isOpen={RegisterModal}
      title="Register"
      actionLabel="Continue"
      onClose={() => dispatch(setModal({ key: ModalKey.RegisterModal, value: false }))}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal;

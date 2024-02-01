'use client';

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import { ReduxStore } from "@/redux/store";
import { ModalKey, setModal } from "@/redux/reducers/modal";

const RegisterModal = () => {
  const dispatch = useDispatch();
  const { RegisterModal } = useSelector((state: ReduxStore) => state.modal);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('data');
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
      <Input
        id="name"
        label="Name"
        disabled={false}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={false}
        register={register}
        errors={errors}
        required
      />
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

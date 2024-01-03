import { FieldValues, useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import Modal from "./Modal";
import Heading from "../Heading";
import Button from "../Button";
import Input from "../Input" ;

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: Function;
}

const LoginModal = ({ isOpen, setIsOpen } : LoginModalProps) => {
  const {
    register,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome back"
        subtitle="Login to your account!"
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
          text-neutral-500
          text-center
          mt-4
          font-light
        "
      >
        <p>Not registered yet?
          <span
            className="
              text-neutral-800
              cursor-pointer
              hover:underline
            "
            > Register</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={false}
      onSubmit={() => {}}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Login"
      actionLabel="Continue"
      onClose={() => {}}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal;

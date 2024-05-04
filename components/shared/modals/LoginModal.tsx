'use client';

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

import Modal from "./Modal";
import Heading from "../Heading";
import Button from "../Button";
import Input from "../inputs/Input";
import { ReduxStore } from "@/redux/store";
import { ModalKey, setModal } from '@/redux/features/modals/modalSlice';
import { useGoogleLoginMutation, useLoginMutation, useLogoutMutation } from "@/redux/features/auth/authApiSlice";
import { setCredentials, logOut } from "@/redux/features/auth/authSlice";

const LoginModal = () => {
  const dispatch = useDispatch();
  const { LoginModal, RegisterModal } = useSelector((state: ReduxStore) => state.modal);
  const [login, { isLoading }] = useLoginMutation()
  const [logout] = useLogoutMutation();
  const [googleLoginApi, googleLoginApiResult] = useGoogleLoginMutation();

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async tokenResponse => {
      const result = await googleLoginApi(tokenResponse.code).unwrap();
      const { accessToken, refreshToken, email: newEmail, fullName, isGoogleLogin, picture } = result;
      dispatch(setCredentials({
        user: {
          email: newEmail,
          fullName,
          isGoogleLogin,
          picture,
        },
        accessToken,
        refreshToken,
        isAuthenticated: true,
      }))
      toast.success('Logged In successfully', { autoClose: 1000 });
      dispatch(setModal({ key: ModalKey.LoginModal, value: false }))
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    const userData = await login({ email, password }).unwrap();
    const { accessToken, refreshToken, email: newEmail, fullName, isGoogleLogin, picture } = userData;
    dispatch(setCredentials({
      user: {
        email: newEmail,
        fullName,
        isGoogleLogin,
        picture,
      },
      accessToken,
      refreshToken,
      isAuthenticated: true,
    }))
    reset();
    toast.success('Logged In successfully', { autoClose: 1000 });
    dispatch(setModal({ key: ModalKey.LoginModal, value: false }))
  }

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
        onClick={() => googleLogin()}
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
        <p>Not registered yet?
          <span
            onClick={() => {
              dispatch(setModal({ key: ModalKey.RegisterModal, value: true }));
              dispatch(setModal({ key: ModalKey.LoginModal, value: false }))
            }}
            className="
              text-popover-foreground
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
      onSubmit={handleSubmit(onSubmit)}
      isOpen={LoginModal}
      title="Login"
      actionLabel="Continue"
      onClose={() => dispatch(setModal({ key: ModalKey.LoginModal, value: false }))}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal;

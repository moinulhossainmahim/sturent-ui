'use client';

import { FieldValues, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import Modal from "./Modal";
import Heading from "../Heading";
import Button from "../Button";
import Input from "../inputs/Input";
import { ReduxStore } from "@/redux/store";
import { ModalKey, setModal } from '@/redux/features/modals/modalSlice';
import { useGoogleLoginMutation, useLoginMutation, useLogoutMutation } from "@/redux/features/auth/authApiSlice";
import { setCredentials, logOut } from "@/redux/features/auth/authSlice";
import { useGoogleLogin } from "@react-oauth/google";

const LoginModal = () => {
  const [login, { isLoading }] = useLoginMutation()
  const [googleLoginApi, googleLoginApiResult] = useGoogleLoginMutation();

  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const result = await googleLoginApi(tokenResponse.access_token).unwrap();
      console.log('googleLoginResult', result);
    },
  });
  const [logout] = useLogoutMutation();

  const dispatch = useDispatch();
  const { LoginModal, RegisterModal } = useSelector((state: ReduxStore) => state.modal);
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

  async function handleSubmit() {
    const userData = await login({ email: 'moinul@gmail.com', password: '12345' }).unwrap();
    dispatch(setCredentials({ user: undefined, ...userData, isAuthenticated: true }));
  }

  async function handleLogout() {
    const response = await logout({}) as { data: { message: string, status: number } };
    if (response?.data?.status === 200) {
      dispatch(logOut());
    }
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
      <Button
        outline
        label="Logout"
        onClick={handleLogout}
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
      onSubmit={handleSubmit}
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

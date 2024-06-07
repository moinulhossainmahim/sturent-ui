'use client';

import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";

import MenuItem from "./MenuItem";
import { ReduxStore } from "@/redux/store";
import { ModalKey, setModal } from '@/redux/features/modals/modalSlice';
import { useLogoutMutation } from "@/redux/features/auth/authApiSlice";
import { logOut } from "@/redux/features/auth/authSlice";

const UserMenu= () => {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const [isOpen, setIsOpen] = useState(false);
  let { user, isAuthenticated } = useSelector((state: ReduxStore) => state.auth);
  const registerModal = useSelector((state: ReduxStore) => state.modal.RegisterModal);
  const loginModal = useSelector((state: ReduxStore) => state.modal.LoginModal);

  isAuthenticated = true;

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  async function handleLogout() {
    const response = await logout({}) as { data: { message: string, status: number } };
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
    localStorage.setItem('user', '');
    if (response?.data?.status === 200) {
      dispatch(logOut());
      toast.success('Logged Out successfully', { autoClose: 1000 });
      toggleOpen();
    }
  }

  return (
    <>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <button
            onClick={() => {
              if(isAuthenticated) {
                dispatch(setModal({ key: ModalKey.CreatePropertyModal, value: true }))
              } else {
                dispatch(setModal({ key: ModalKey.LoginModal, value: true }))
              }
            }}
            className="
              hidden
              md:block
              text-sm
              font-semibold
              py-3
              px-4
              rounded-full
              hover:bg-muted
              transition
              cursor-pointer
            "
          >
            StuRENT your home
          </button>
          <button
            onClick={toggleOpen}
            className="
              px-[.6rem]
              py-[.2rem]
              md:py-1
              md:px-2
              border-[1px]
              border-border
              flex
              flex-row
              items-center
              gap-3
              rounded-full
              cursor-pointer
              hover:shadow-md
              transition
              "
          >
            <AiOutlineMenu />
            <div>
              <Image
                className="rounded-full"
                src={ isAuthenticated && user?.picture ? user.picture : '/assets/placeholder.jpg'}
                width={30}
                height={30}
                alt="avatar"
              />
            </div>
          </button>
        </div>
        {isOpen && (
          <div
            className="
              z-10
              absolute
              rounded-xl
              shadow-md
              w-[200px]
              bg-card
              overflow-hidden
              right-0
              top-12
              text-sm
            "
          >
            <div className="flex flex-col cursor-pointer">
              {!isAuthenticated ? (
                <>
                  <MenuItem
                    onClick={() => {
                      dispatch(setModal({ key: ModalKey.LoginModal, value: true }))
                      toggleOpen();
                    }}
                    label="Login"
                  />
                  <MenuItem
                    onClick={() => {
                      dispatch(setModal({ key: ModalKey.RegisterModal, value: true }))
                      toggleOpen();
                    }}
                    label="Sign up"
                  />
                </>
              ) : (
                <>
                  <Link href='/properties'>
                    <MenuItem
                      onClick={() => {
                        toggleOpen();
                      }}
                      label="My Listings"
                      />
                  </Link>
                  <Link href='/favorites'>
                    <MenuItem
                      onClick={() => {
                        toggleOpen();
                      }}
                      label="My favorites"
                      />
                  </Link>
                  <Link href='/profile'>
                    <MenuItem
                      onClick={() => {
                        toggleOpen();
                      }}
                      label="Profile"
                      />
                  </Link>
                  <MenuItem
                    onClick={() => {
                      dispatch(setModal({ key: ModalKey.LoginModal, value: true }))
                      toggleOpen();
                    }}
                    label="Login"
                  />
                  <MenuItem
                    onClick={() => {
                      dispatch(setModal({ key: ModalKey.RegisterModal, value: true }))
                      toggleOpen();
                    }}
                    label="Sign up"
                  />
                  {/* <MenuItem
                    onClick={handleLogout}
                    label="Logout"
                  /> */}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
   );
}

export default UserMenu;

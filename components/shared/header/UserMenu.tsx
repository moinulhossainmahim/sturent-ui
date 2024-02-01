'use client';

import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

import MenuItem from "./MenuItem";
import { ReduxStore } from "@/redux/store";
import { ModalKey, setModal } from "@/redux/reducers/modal";

const UserMenu= () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useSelector((state: ReduxStore) => state.modal.RegisterModal);
  const loginModal = useSelector((state: ReduxStore) => state.modal.LoginModal);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div
            onClick={() => dispatch(setModal({ key: ModalKey.CreatePropertyModal, value: true }))}
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
          </div>
          <div
            onClick={toggleOpen}
            className="
              p-4
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
            <div className="hidden md:block">
              <Image
                className="rounded-full"
                src='/assets/placeholder.jpg'
                width={30}
                height={30}
                alt="avatar"
              />
            </div>
          </div>
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
            </div>
          </div>
        )}
      </div>
    </>
   );
}

export default UserMenu;

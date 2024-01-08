'use client';

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import MenuItem from "./MenuItem";
import Image from "next/image";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";

const UserMenu= () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div
            onClick={() => console.log('clicked')}
            className="
              hidden
              md:block
              text-sm
              font-semibold
              py-3
              px-4
              rounded-full
              hover:bg-neutral-100
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
              border-neutral-200
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
              absolute
              rounded-xl
              shadow-md
              w-[200px]
              bg-white
              overflow-hidden
              right-0
              top-12
              text-sm
            "
          >
            <div className="flex flex-col cursor-pointer">
              <MenuItem
                onClick={() => {
                  setOpenLoginModal(true)
                  toggleOpen();
                }}
                label="Login"
              />
              <MenuItem
                onClick={() => {
                  toggleOpen();
                  setOpenRegisterModal(true)
                }}
                label="Sign up"
              />
            </div>
          </div>
        )}
      </div>
      <LoginModal isOpen={openLoginModal} setIsOpen={setOpenLoginModal} />
      <RegisterModal isOpen={openRegisterModal} setIsOpen={setOpenRegisterModal} />
    </>
   );
}

export default UserMenu;

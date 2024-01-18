'use client';

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import MenuItem from "./MenuItem";
import Image from "next/image";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import Link from "next/link";

const UserMenu= () => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

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
                  loginModal.onOpen()
                  toggleOpen();
                }}
                label="Login"
              />
              <MenuItem
                onClick={() => {
                  registerModal.onOpen()
                  toggleOpen();
                }}
                label="Sign up"
              />
              <MenuItem
                onClick={() => {
                  console.log('clicked')
                }}
                label="My Listings"
              />
              <Link href='/favorites'>
                <MenuItem
                  onClick={() => {
                    console.log('clicked')
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

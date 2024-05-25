'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      src='/assets/sturent-logo.png'
      alt="logo"
      className="
        cursor-pointer
      "
      height={10}
      width={150}
    />
  )
}

export default Logo;

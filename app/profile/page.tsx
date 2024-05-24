import { ProfileInfo, ProfileUserCard, ProfileVerificationCard } from '@/components/shared/profile';
import React from 'react'

const page = () => {
  return (
    <section className='flex justify-center w-[100vw] h-[93vh] items-center'>
      <div className='flex w-[80%] h-[80%] md:flex-row flex-col gap-20 xl:px-[10%]'>
        <div className='flex flex-col gap-10 items-center'>
          <ProfileUserCard />
          <ProfileVerificationCard />
        </div>
        <ProfileInfo />
      </div>
    </section>
  )
}

export default page;

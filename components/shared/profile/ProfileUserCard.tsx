'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ReduxStore } from '@/redux/store';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const ProfileUserCard = () => {
  const { picture, fullName } = useSelector((state: ReduxStore) => state.auth.user);

  return (
    <Card className="w-[280px] shadow-xl rounded-xl">
      <CardContent className='flex flex-col justify-center items-center pt-6'>
        <Image
          src={picture}
          alt='/assets/placeholder.jpg'
          height={80}
          width={120}
          className='rounded-full'
        />
        <h6 className="text-2xl font-bold mt-4">{fullName}</h6>
      </CardContent>
    </Card>
  )
}

export default ProfileUserCard;

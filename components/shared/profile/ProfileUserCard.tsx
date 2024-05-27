'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ReduxStore } from '@/redux/store';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { FaCamera } from 'react-icons/fa';
import useModalAction from '@/hooks/useModalAction';
import { ModalKey } from '@/redux/features/modals/modalSlice';
import ProfileImageUploadModal from '../modals/ProfileImageUploadModal';

const ProfileUserCard = () => {
  const { openModal } = useModalAction(ModalKey.UpdateProfileImageModal);
  const auth = useSelector((state: ReduxStore) => state.auth);

  return (
    <>
      <Card className="w-full sm:w-[450px] md:w-[280px] shadow-xl rounded-xl relative">
        <CardContent className='flex flex-col justify-center items-center pt-6'>
          <div className="relative">
            <Image
              src={auth?.user?.picture || ''}
              alt='/assets/placeholder.jpg'
              height={80}
              width={120}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8euJEPQAHxQLmlEPAgwAAAABJRU5ErkJggg=='
              className='rounded-full'
            />
            <button
              className="absolute bottom-[5px] right-1/2 transform translate-x-1/2 translate-y-1/2 bg-card-foreground p-1 rounded-full shadow-md"
              onClick={openModal}
            >
              <FaCamera className="text-secondary" />
            </button>
          </div>
          <h6 className="text-2xl font-bold mt-4">{auth?.user?.fullName || ''}</h6>
        </CardContent>
      </Card>
      <ProfileImageUploadModal />
    </>
  )
}

export default ProfileUserCard;

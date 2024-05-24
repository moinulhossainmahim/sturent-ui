'use client';

import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { ModalKey, setModal } from '@/redux/features/modals/modalSlice';
import UpdateGeneralInfoModal from '../modals/UpdateGeneralInfoModal';
import AddressModal from '../modals/AddressModal';
import StudentIDModal from '../modals/StudentIDModal';
import GovernmentIDModal from '../modals/GovernmentIDModal';

const ProfileInfo = () => {
  const dispatch = useDispatch();
  const [isHost, setIsHost] = useState(false)
  const [type, setType] = useState<'fullName' | 'email' | 'phone'>('fullName')
  const [addressActionType, setAddressActionType] = useState<'create' | 'update'>('create');

  return (
    <>
      <div className='w-full md:w-[calc(100% - 360px)]'>
        <h6 className="text-3xl font-semibold mb-8">Personal Info</h6>
        <div>
          <div className='flex justify-between'>
            <Label htmlFor="host" className='font-semibold text-lg'>Continue As a Host?</Label>
            <Switch id="host" checked={isHost} onCheckedChange={() => setIsHost((prev) => !prev)} />
          </div>
          <Separator className='my-4' />
          <div className='flex justify-between'>
            <div>
              <h6 className="text-md font-semibold">Full Name</h6>
              <p className='text-sm text-muted-foreground leading-6 mt-2'>Moinul Hossain</p>
            </div>
            <Button
              variant='secondary'
              size='sm'
              onClick={() => {
                dispatch(setModal({ key: ModalKey.UpdateGeneralInfoModal, value: true }))
                setType('fullName');
              }}
            >Edit</Button>
          </div>
          <Separator className='my-4' />
          <div className='flex justify-between'>
            <div>
              <h6 className="text-md font-semibold">Email</h6>
              <p className='text-sm text-muted-foreground leading-6 mt-2'>moinulhossainmahim@gmail.com</p>
            </div>
            <Button
              variant='secondary'
              size='sm'
              onClick={() => {
                dispatch(setModal({ key: ModalKey.UpdateGeneralInfoModal, value: true }))
                setType('email');
              }}
            >Edit</Button>
          </div>
          <Separator className='my-4' />
          <div className='flex justify-between'>
            <div>
              <h6 className="text-md font-semibold">Phone Number</h6>
              <p className='text-sm text-muted-foreground leading-6 mt-2'>Not provided</p>
            </div>
            <Button
              variant='secondary'
              size='sm'
              onClick={() => {
                dispatch(setModal({ key: ModalKey.UpdateGeneralInfoModal, value: true }))
                setType('phone');
              }}
            >Add</Button>
          </div>
          <Separator className='my-4' />
          <div className='flex justify-between'>
            <div>
              <h6 className="text-md font-semibold">Address</h6>
              <p className='text-sm text-muted-foreground leading-6 mt-2'>Not provided</p>
            </div>
            <Button
              variant='secondary'
              size='sm'
              onClick={() => {
                dispatch(setModal({ key: ModalKey.AddressModal, value: true }))
                setAddressActionType('create')
              }}
            >Add</Button>
          </div>
          <Separator className='my-4' />
          {isHost ? (
            <>
              <div className='flex justify-between'>
                <div>
                  <h6 className="text-md font-semibold">Government ID</h6>
                  <p className='text-sm text-muted-foreground leading-6 mt-2'>Not provided</p>
                </div>
                <Button variant='secondary' size='sm' onClick={() => dispatch(setModal({ key: ModalKey.GovtIDModal, value: true }))}>Add</Button>
              </div>
              <Separator className='my-4' />
            </>
          ) : null}
          {!isHost ? (
            <>
              <div className='flex justify-between'>
                <div>
                  <h6 className="text-md font-semibold">Government ID</h6>
                  <p className='text-sm text-muted-foreground leading-6 mt-2'>Not provided</p>
                </div>
                <Button variant='secondary' size='sm' onClick={() => dispatch(setModal({ key: ModalKey.GovtIDModal, value: true }))}>Add</Button>
              </div>
              <Separator className='my-4' />
              <div className='flex justify-between'>
                <div>
                  <h6 className="text-md font-semibold">Student ID</h6>
                  <p className='text-sm text-muted-foreground leading-6 mt-2'>Not provided</p>
                </div>
                <Button variant='secondary' size='sm' onClick={() => dispatch(setModal({ key: ModalKey.StudentIDModal, value: true }))}>Add</Button>
              </div>
              <Separator className='my-4' />
            </>
          ) : null}
        </div>
      </div>
      <UpdateGeneralInfoModal type={type} />
      <AddressModal actionType={addressActionType} />
      <StudentIDModal />
      <GovernmentIDModal />
    </>
  )
}

export default ProfileInfo;

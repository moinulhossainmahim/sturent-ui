'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react'

const ProfileInfo = () => {
  const [hostValue, setHostValue] = useState(false)

  return (
    <div style={{ width: 'calc(100% - 360px)' }}>
      <h6 className="text-3xl font-semibold mb-8">Personal Info</h6>
      <div>
        <div className='flex justify-between'>
          <Label htmlFor="host" className='font-semibold text-lg'>Continue As a Host?</Label>
          <Switch id="host" checked={hostValue} onCheckedChange={() => setHostValue((prev) => !prev)} />
        </div>
        <Separator className='my-4' />
        <div className='flex justify-between'>
          <div>
            <h6 className="text-md font-semibold">Full Name</h6>
            <p className='text-sm text-muted-foreground leading-6 mt-2'>Moinul Hossain</p>
          </div>
          <Button variant='secondary' size='sm'>Edit</Button>
        </div>
        <Separator className='my-4' />
        <div className='flex justify-between'>
          <div>
            <h6 className="text-md font-semibold">Email</h6>
            <p className='text-sm text-muted-foreground leading-6 mt-2'>moinulhossainmahim@gmail.com</p>
          </div>
          <Button variant='secondary' size='sm'>Edit</Button>
        </div>
        <Separator className='my-4' />
        <div className='flex justify-between'>
          <div>
            <h6 className="text-md font-semibold">Phone Number</h6>
            <p className='text-sm text-muted-foreground leading-6 mt-2'>Not provided</p>
          </div>
          <Button variant='secondary' size='sm'>Add</Button>
        </div>
        <Separator className='my-4' />
        <div className='flex justify-between'>
          <div>
            <h6 className="text-md font-semibold">Address</h6>
            <p className='text-sm text-muted-foreground leading-6 mt-2'>Not provided</p>
          </div>
          <Button variant='secondary' size='sm'>Add</Button>
        </div>
        <Separator className='my-4' />
        {hostValue ? (
          <>
            <div className='flex justify-between'>
              <div>
                <h6 className="text-md font-semibold">Government ID</h6>
                <p className='text-sm text-muted-foreground leading-6 mt-2'>Not provided</p>
              </div>
              <Button variant='secondary' size='sm'>Add</Button>
            </div>
            <Separator className='my-4' />
          </>
        ) : null}
        {!hostValue ? (
          <>
            <div className='flex justify-between'>
              <div>
                <h6 className="text-md font-semibold">Student ID</h6>
                <p className='text-sm text-muted-foreground leading-6 mt-2'>Not provided</p>
              </div>
              <Button variant='secondary' size='sm'>Add</Button>
            </div>
            <Separator className='my-4' />
          </>
        ) : null}
      </div>
    </div>
  )
}

export default ProfileInfo;

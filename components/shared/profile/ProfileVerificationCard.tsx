'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FaCheckCircle } from "react-icons/fa";
import Button from '../Button';

const ProfileVerificationCard = () => {
  return (
    <Card className="w-full sm:w-[450px] md:w-[280px] shadow-xl rounded-xl">
      <CardContent className='flex flex-col'>
        <h6 className="text-lg font-semibold mt-4">Verified Info</h6>
        <div className='mt-6'>
          <div className='flex gap-4'>
            <FaCheckCircle size={25} />
            <h6 className="text-md">Email Address</h6>
          </div>
        </div>
        <Separator className='mt-8'/>
        <div className='mt-6'>
        <h6 className="text-lg font-semibold mb-4">Verify Identity</h6>
          <p className='text-sm text-muted-foreground leading-6'>Before Rent or Host on <span className="text-primary">stuRENT</span> you need to verify your identity first</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button label='Get Verified' onClick={() => {}} />
      </CardFooter>
    </Card>
  )
}

export default ProfileVerificationCard;

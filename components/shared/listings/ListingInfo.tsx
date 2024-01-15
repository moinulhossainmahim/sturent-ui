'use client';

import { IconType } from "react-icons";
import { FaBed, FaBath, FaKitchenSet, FaCar, FaWifi } from "react-icons/fa6";
import { MdAllInbox, MdOutlineBalcony, MdElevator, MdOutlineTableBar } from "react-icons/md";
import { BiSolidCctv } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import useListingFeaturesModal from "@/app/hooks/useListingFeaturesModal";

interface ListingInfoProps {
  description?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  category?: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  locationValue?: string;
  img: string;
}

const features = [
  {
    id: 1,
    icon: MdOutlineBalcony,
    name: 'Balcony',
  },
  {
    id: 2,
    icon: FaCar,
    name: 'Free Parking',
  },
  {
    id: 3,
    icon: FaKitchenSet,
    name: 'Kitchen',
  },
  {
    id: 4,
    icon: MdElevator,
    name: 'Elevator',
  },
  {
    id: 5,
    icon: BiSolidCctv,
    name: 'CCTV Security',
  },
  {
    id: 6,
    icon: FaWifi,
    name: 'Wifi'
  },
]

const ListingInfo: React.FC<ListingInfoProps> = ({
  description = '',
  guestCount = 1,
  roomCount = 1,
  bathroomCount = 1,
  category,
  img
}) => {
  const featuresModal = useListingFeaturesModal();

  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-4 w-3/4">
        <h1 className="text-2xl font-bold">BDT 80 Thousand</h1>
        <h4 className="text-md font-medium">Sector 3, Uttara, Dhaka</h4>
        <div className="flex gap-7">
          <div className="flex gap-1 items-center">
            <FaBed size={20} />
            <span className="font-sm">3 Beds</span>
          </div>
          <div className="flex gap-1 items-center">
            <FaBath size={20} />
            <span className="font-sm">4 Baths</span>
          </div>
          <div className="flex gap-1 items-center">
            <MdAllInbox size={20} />
            <span className="font-sm">2,180 sqft</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold my-4">A Contemporary Cozy Flat Of 2180 Sq Ft Is Up For Rent Is Situated In Sector 03, Uttara</h1>
          <p className="leading-7">
            Find your home in this 2180  Square Feet apartment in Uttara.
            Featuring 3 beds and 4 baths, this cozy and beautiful apartment can be a perfect fit for families who are planning to make a home in Uttara.
            Just as you enter the apartment, you will find open space for drawing and dining space. The master bedroom has attached balconies with it.
            A beautiful kitchen with durable fittings is there to make your cooking time comforting. The security service and maintenance of this building
            is top notch that ensures a secure and healthy life for your family.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-semibold my-6">General Information</h1>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-[45%]">
              <div className="flex gap-4 items-center">
                <p>Type</p>
                <h5 className="text-lg font-semibold">Room</h5>
              </div>
              <hr />
              <div className="flex gap-4 items-center">
                <p>Purpose</p>
                <h5 className="text-lg font-semibold">For Rent</h5>
              </div>
              <hr />
            </div>
            <div className="flex flex-col gap-4 w-[45%]">
              <div className="flex gap-4 items-center">
                <p>Tracking no.</p>
                <h5 className="text-lg font-semibold">TN2022234321</h5>
              </div>
              <hr />
              <div className="flex gap-4 items-center">
                <p>Last Updated</p>
                <h5 className="text-lg font-semibold">11 January 2024</h5>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="py-4">
          <h1 className="text-lg font-semibold my-6">What this Room offers</h1>
          <div className="flex gap-6 mb-6 flex-wrap">
            {features.map((feature) => (
              <div className="h-[8rem] w-[10rem] flex flex-col gap-2 justify-center items-center bg-accent rounded-xl" key={feature.id}>
                {<feature.icon size={25} />}
                <p>{feature.name}</p>
              </div>
            ))}
          </div>
          <Button className="mb-4 border-neutral-900 border-2" variant='outline' size='lg' onClick={featuresModal.onOpen}>Show All Facilities</Button>
          <hr />
        </div>
      </div>
      <div className="w-1/4">
        <h2>Subscribe card!</h2>
        <h2>Under construction</h2>
      </div>
    </div>
   );
}

export default ListingInfo;

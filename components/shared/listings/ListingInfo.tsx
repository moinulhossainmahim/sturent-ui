'use client';

import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { FaBed, FaBath, FaKitchenSet, FaCar, FaWifi } from "react-icons/fa6";
import { MdAllInbox, MdOutlineBalcony, MdElevator } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { BiSolidCctv } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import ListingCard from "./ListingCard";
import { IFeature } from "@/types/Feature";
import RoomFeature from "../RoomFeature";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card";
import { ModalKey, setModal } from '@/redux/features/modals/modalSlice';
import { IListing } from "@/types";

const DynamicMap = dynamic(() => import('../map/Map'), { ssr: false });

interface ListingInfoProps {
  listing: IListing;
}

const newListings = [
  {
    id: 1,
    title: "Cozy Apartment in the City Center",
    description: "A comfortable and stylish apartment located in the heart of the city.",
    featuredImg: "/assets/slide-1.jpeg",
    galleryImg: ["/assets/slide-2.jpeg"],
    roomCount: 2,
    bathroomCount: 1,
    guestCount: 4,
    price: 15,
    location: 'Uttara, Dhaka',
    isSaved: false,
    latitude: 23.873751,
    longitude: 90.396454,
  },
  {
    id: 2,
    title: "Spacious Family Home with Garden",
    description: "A large and welcoming family home with a beautiful garden for relaxation.",
    featuredImg: "/assets/slide-1.jpeg",
    galleryImg: ["/assets/slide-2.jpeg"],
    roomCount: 4,
    bathroomCount: 2,
    guestCount: 8,
    price: 23,
    location: 'Mirpur 10, Dhaka',
    isSaved: false,
    latitude: 23.8069,
    longitude: 90.3687,
  },
  {
    id: 3,
    title: "Downtown Loft with City View",
    description: "A trendy loft with stunning views of the city skyline.",
    featuredImg: "/assets/slide-4.jpeg",
    galleryImg: ["/assets/slide-5.jpeg"],
    roomCount: 1,
    bathroomCount: 1,
    guestCount: 2,
    price: 10,
    location: 'Chakbazar, Chattogram',
    isSaved: false,
    latitude: 22.3518,
    longitude: 91.8331,
  },
]

export const features: IFeature[] = [
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

const ListingInfo: React.FC<ListingInfoProps> = ({ listing }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-[5%] flex-col lg:flex-row">
      <div className="flex flex-col gap-4 sm:w-full lg:w-[55%]">
        <h1 className="text-2xl font-bold">BDT {listing.price} Thousand</h1>
        <div className="flex gap-1 items-center">
          <IoLocation size={22} />
          <h4 className="text-md font-medium">{listing.location}</h4>
        </div>
        <div className="flex gap-7">
          <div className="flex gap-1 items-center">
            <FaBed size={20} />
            <span className="font-sm">{listing.roomCount} Beds</span>
          </div>
          <div className="flex gap-1 items-center">
            <FaBath size={20} />
            <span className="font-sm">{listing.bathroomCount} Baths</span>
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
          <div className="flex justify-normal md:justify-between flex-col md:flex-row gap-4 md:gap-0">
            <div className="flex flex-col gap-4 w-full md:w-[45%]">
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
            <div className="flex flex-col gap-4 w-full md:w-[45%]">
              <div className="flex gap-4 items-center">
                <p>Tracking no.</p>
                <h5 className="text-lg font-semibold">TN2022234321</h5>
              </div>
              <hr />
              <div className="flex gap-4 items-center">
                <p>Advance</p>
                <h5 className="text-lg font-semibold">2 Months</h5>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="py-4">
          <h1 className="text-lg font-semibold my-6">What this Room offers</h1>
          <div className="flex gap-6 mb-6 flex-wrap justify-center lg:justify-normal">
            {features.map((feature) => (
              <RoomFeature feature={feature} key={feature.id} toggleFeature={() => {}} />
            ))}
          </div>
          <Button className="mb-4 border-muted-foreground border-2"
            variant='outline'
            size='lg'
            onClick={() => dispatch(setModal({ key: ModalKey.ListingFeaturesModal, value: true }))}
          >See All Facilities</Button>
          <hr />
        </div>
        <div>
          <h1 className="text-lg font-semibold my-6">Recommended Rooms</h1>
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            2xl:grid-cols-5
            gap-8
            mb-8
            "
          >
            {newListings.map((listing) => (
              <ListingCard
                key={listing.id}
                data={listing}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="sm:w-full lg:w-[40%] mt-[5%] justify-center lg:justify-normal">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>BDT {listing.price}k Month</CardTitle>
            <CardDescription className="mt-4">Hosted by <span className="text-primary">stuRENT</span></CardDescription>
          </CardHeader>
          <CardContent>
            <p>You will get all details after payment</p>
          </CardContent>
          <CardFooter className="justify-center w-full">
            <Button size='lg'>Rent This Room</Button>
          </CardFooter>
        </Card>
        <div className="w-full h-[600px] mt-4 mb-24">
          <h1 className="text-2xl font-bold mb-2">Location in Map</h1>
          <DynamicMap items={[listing]} />
        </div>
      </div>
    </div>
   );
}

export default ListingInfo;

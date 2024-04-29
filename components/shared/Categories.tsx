'use client';

import qs from 'query-string';
import { usePathname, useSearchParams } from 'next/navigation';
import { FaSlideshare } from 'react-icons/fa';
import { MdBedroomChild } from 'react-icons/md';
import { IoHome } from "react-icons/io5";

import CategoryBox from './CategoryBox';
import Container from './Container';
import { ICategory } from '@/types';
import { useGetAllPropertiesQuery } from '@/redux/features/properties/propertiesApiSlice';

export const categories: ICategory[] = [
  {
    label: 'Single',
    icon: MdBedroomChild,
    description: 'This category contains single room',
  },
  {
    label: 'Sublet',
    icon: FaSlideshare,
    description: 'This category contains sublet rooms',
  },
  {
    label: 'Flat',
    icon: IoHome,
    description: 'This property is for flats'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const { data, isLoading } = useGetAllPropertiesQuery(qs.parse(params.toString()), { skip: params ? false : true });
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container isCategory={true}>
      <div
        className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
          w-[90%] sm:w-[80%] md:w-[50%]
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label.toLowerCase()}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;

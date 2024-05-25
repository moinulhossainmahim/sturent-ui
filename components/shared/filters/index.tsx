'use client';

import { useEffect, useState } from "react";

import FilterBody from "./FilterBody";
import FilterHeading from "./FilterHeading";
import { usePathname, useRouter } from "next/navigation";

const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [priceRange, setPriceRange] = useState([1000, 50000]);
  const [university, setUniversity] = useState<string >('');
  const [area, setArea] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({
    gender: {
      Male: false,
      Female: false,
    },
    roomType: {
      Single: false,
      Sublet: false,
      Flat: false,
    },
  });

  const resetFilters = () => {
    setFilters({
      gender: {
        Male: false,
        Female: false,
      },
      roomType: {
        Single: false,
        Sublet: false,
        Flat: false,
      },
    });
    setPriceRange([1000, 50000])
    setArea('');
    setUniversity('');
    router.push(pathname);
  };

  const isRoomType = (category: 'roomType' | 'gender', option: RoomType | Gender): option is RoomType => {
    return category === 'roomType';
  };

  const handleCheckboxChange = (category: 'roomType' | 'gender', option: RoomType | Gender) => {
    if (isRoomType(category, option)) {
      setFilters((prevFilters) => {
        const updatedRoomType = {
          ...prevFilters.roomType,
          [option]: !prevFilters.roomType[option],
        };
        return {
          ...prevFilters,
          roomType: updatedRoomType,
        };
      });
    } else {
      setFilters((prevFilters) => {
        const updatedGender = {
          ...prevFilters.gender,
          [option]: !prevFilters.gender[option],
        };
        return {
          ...prevFilters,
          gender: updatedGender,
        };
      });
    }
  };

  useEffect(() => {
    const query: Record<string, string> = {};
    Object.keys(filters.gender).forEach(key => {
      if (filters.gender[key as Gender]) query[key.toLowerCase()] = 'true';
    });
    Object.keys(filters.roomType).forEach(key => {
      if (filters.roomType[key as RoomType]) query[key.toLowerCase()] = 'true';
    });
  }, [filters]);

  return (
    <div>
      <FilterHeading resetFilters={resetFilters} />
      <FilterBody
        university={university}
        setUniversity={setUniversity}
        area={area}
        setArea={setArea}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        filters={filters}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  )
}

export default Filters;

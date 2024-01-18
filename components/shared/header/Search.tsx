'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';

import useSearchModal from '@/hooks/useSearchModal';

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();

  const  genderValue = params?.get('gender');
  const  university = params?.get('institution');
  const  location = params?.get('locationValue');

  const genderLabel = useMemo(() => {
    if (genderValue) {
      return genderValue;
    }
    return 'Any One';
  }, [genderValue, params]);

  const universityLabel = useMemo(() => {
    if (university) {
      return university;
    }
    return 'Any Institution'
  }, [university, params]);

  const locationLabel = useMemo(() => {
    if (location) {
      return location;
    }
    return 'Any Where';
  }, [location, params]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
      "
    >
      <div
        className="
          flex
          flex-row
          items-center
          justify-between
        "
      >
        <div
          className="
            text-sm
            font-semibold
            px-6
          "
        >
          {genderLabel}
        </div>
        <div
          className="
            hidden
            sm:block
            text-sm
            font-semibold
            px-6
            border-x-[1px]
            flex-1
            text-center
          "
        >
          {universityLabel}
        </div>
        <div
          className="
            text-sm
            pl-6
            pr-2
            text-foreground
            flex
            flex-row
            items-center
            gap-3
          "
        >
          <div className="hidden sm:block">{locationLabel}</div>
          <div
            className="
              p-2
              bg-primary
              rounded-full
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

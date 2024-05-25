'use client';

import { Dispatch, SetStateAction } from "react";

import CustomCheckbox from "./Checkbox";
import { FilterSelect } from "./Select";
import { institutionList } from "../inputs/Institution";
import { placeList } from "../inputs/Place";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SliderComponent from "./Slider";

interface FilterBodyProps {
  priceRange: number[];
  setPriceRange: Dispatch<SetStateAction<number[]>>;
  filters: Filters;
  handleCheckboxChange: (category: 'roomType' | 'gender', option: RoomType | Gender) => void;
  area: string;
  setArea: Dispatch<SetStateAction<string>>;
  university: string;
  setUniversity: Dispatch<SetStateAction<string>>;
}

const FilterBody = ({ priceRange, setPriceRange, filters, handleCheckboxChange, area, setArea, university, setUniversity } : FilterBodyProps) => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-medium">Gender</h3>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {Object.keys(filters.gender).map((key) => (
            <CustomCheckbox
              key={key}
              label={key}
              checked={filters.gender[key as Gender]}
              onChange={() => handleCheckboxChange('gender', key as Gender)}
            />
          ))}
        </div>
      </div>
      <Separator className="my-6 h-[2px]" />
      <div>
        <div className="flex justify-between mb-4 items-center">
          <h3 className="text-lg font-medium">Price Range</h3>
          <Button variant='outline' className="border-none text-primary bg-transparent hover:bg-transparent hover:text-primary" onClick={() => {}}>Apply</Button>
        </div>
        <div>
          <SliderComponent
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>
      </div>
      <Separator className="my-6 h-[2px]" />
      <div>
        <h3 className="text-lg font-medium">Room Type</h3>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {Object.keys(filters.roomType).map((key) => (
            <CustomCheckbox
              key={key}
              label={key}
              checked={filters.roomType[key as RoomType]}
              onChange={() => handleCheckboxChange('roomType', key as RoomType)}
            />
          ))}
        </div>
      </div>
      <Separator className="my-6 h-[2px]" />
      <div className="pb-4 mb-4">
        <div className="flex justify-between mb-4 items-center">
          <h3 className="text-lg font-medium">Area and University</h3>
          <Button variant='outline' className="border-none text-primary bg-transparent hover:bg-transparent hover:text-primary" onClick={() => {}}>Apply Filter</Button>
        </div>
        <div className="flex flex-col gap-4">
          <FilterSelect name="University" items={institutionList} value={university} setValue={setUniversity} />
          <FilterSelect name="Area" items={placeList} value={area} setValue={setArea} />
        </div>
      </div>
    </div>
  )
}

export default FilterBody;

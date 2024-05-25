import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FilterHeadingProps {
  resetFilters: () => void;
}

const FilterHeading = ({ resetFilters } : FilterHeadingProps) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h5 className="font-semibold text-md">Filters</h5>
        <Button variant='outline' className="border-none text-primary bg-transparent hover:bg-transparent hover:text-primary" onClick={resetFilters}>Reset All</Button>
      </div>
      <Separator className="my-6 h-[2px]" />
    </div>
  )
}

export default FilterHeading;

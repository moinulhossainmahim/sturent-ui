import CategoryInput from "./CategoryInput";

interface PlaceProps {
  place: string;
  setplace: Function;
}

const placeList = [
  {
    id: 1,
    name: 'Uttara, Dhaka',
  },
  {
    id: 2,
    name: 'Badda, Dhaka',
  },
  {
    id: 3,
    name: 'Banani, Dhaka',
  },
  {
    id: 4,
    name: 'Gulshan, Dhaka',
  },
  {
    id: 5,
    name: 'Dhanmodi, Dhaka',
  },
]

const Place = ({ place, setplace } : PlaceProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[60%] flex flex-col gap-2 text-center max-h-[350px] overflow-y-auto">
        {placeList.map((item) => (
          <CategoryInput
            label={item.name}
            onClick={() => setplace(item.name)}
            selected={item.name === place}
            key={item.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Place;

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
      <ul className="w-[80%] flex flex-col gap-2 text-center max-h-[350px] overflow-y-auto">
        {placeList.map((item) => (
          <li
            key={item.id}
            className={
              `cursor-pointer py-4 w-full bg-muted font-medium rounded-md ${item.name === place ? 'bg-gray-200' : ''}`
            }
            onClick={() => setplace(item.name)}
          >{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Place;

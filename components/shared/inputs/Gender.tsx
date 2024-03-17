import CategoryInput from "./CategoryInput";

interface GenderProps {
  gender: string;
  setGender: Function;
}

const genderList = [
  {
    id: 1,
    name: 'Male',
  },
  {
    id: 2,
    name: 'Female',
  },
  {
    id: 3,
    name: 'Both',
  },
]

const Gender = ({ gender, setGender } : GenderProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[60%] flex flex-col gap-3 text-center">
        {genderList.map((item) => (
          <CategoryInput
            onClick={() => setGender(item.name.toLowerCase())}
            label={item.name}
            selected={item.name.toLowerCase() === gender}
            key={item.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Gender

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
      <ul className="w-[80%] flex flex-col gap-2 text-center">
        {genderList.map((item) => (
          <li
            className={`cursor-pointer py-4 w-full bg-gray-50 font-medium rounded-md hover:bg-gray-100 ${gender === item.name ? 'bg-gray-200' : ''}`}
            onClick={() => setGender(item.name)}
          >{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Gender

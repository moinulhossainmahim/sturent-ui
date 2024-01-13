interface GenderProps {
  gender: string;
  setGender: Function;
}

const Gender = ({ gender, setGender } : GenderProps) => {
  return (
    <div className="w-full flex justify-center">
      <ul className="w-[80%] flex flex-col gap-2 text-center">
        <li className={`cursor-pointer py-4 w-full bg-gray-50 font-medium rounded-md hover:bg-gray-100 ${gender === 'Male' ? 'bg-gray-200' : ''}`} onClick={() => setGender('Male')}>Male</li>
        <li className={`cursor-pointer py-4 w-full bg-gray-50 font-medium rounded-md hover:bg-gray-100 ${gender === 'Female' ? 'bg-gray-200' : ''}`} onClick={() => setGender('Female')}>Female</li>
        <li className={`cursor-pointer py-4 w-full bg-gray-50 font-medium rounded-md hover:bg-gray-100 ${gender === 'Both' ? 'bg-gray-200' : ''}`} onClick={() => setGender('Both')}>Both</li>
      </ul>
    </div>
  )
}

export default Gender

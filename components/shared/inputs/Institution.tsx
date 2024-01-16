interface InstitutionProps {
  institution: string;
  setInstitution: Function;
}

const institutionList = [
  {
    id: 1,
    name: 'Brac University',
  },
  {
    id: 2,
    name: 'North South University',
  },
  {
    id: 3,
    name: 'Northern University',
  },
  {
    id: 4,
    name: 'American International University',
  },
  {
    id: 5,
    name: 'Independent University',
  },
]

const Institution = ({ institution, setInstitution } : InstitutionProps) => {
  return (
    <div className="w-full flex justify-center">
      <ul className="w-[80%] flex flex-col gap-2 text-center max-h-[350px] overflow-y-auto">
        {institutionList.map((institute) => (
          <li
            key={institute.id}
            className={
              `cursor-pointer py-4 w-full bg-muted font-medium rounded-md ${institute.name === institution ? 'bg-gray-200' : ''}`
            }
            onClick={() => setInstitution(institute.name)}
          >{institute.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Institution;

import CategoryInput from "./CategoryInput";

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
      <div className="w-[60%] flex flex-col gap-2 text-center max-h-[350px] overflow-y-auto">
        {institutionList.map((institute) => (
          <CategoryInput
            onClick={() => setInstitution(institute.name)}
            selected={institute.name === institution}
            label={institute.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Institution;

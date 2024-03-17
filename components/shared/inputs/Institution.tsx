import CategoryInput from "./CategoryInput";

export type University = {
  id: number,
  name: string,
  slug: string,
};

interface InstitutionProps {
  institution: string;
  setInstitution: Function;
}

export const institutionList: University[] = [
  {
    id: 1,
    name: 'Brac University',
    slug: 'brac-university',
  },
  {
    id: 2,
    name: 'North South University',
    slug: 'north-south-university',
  },
  {
    id: 3,
    name: 'Northern University',
    slug: 'northern-university',
  },
  {
    id: 4,
    name: 'American International University',
    slug: 'american-international-university',
  },
  {
    id: 5,
    name: 'Independent University',
    slug: 'independent-university',
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
            slug={institute.slug}
            key={institute.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Institution;

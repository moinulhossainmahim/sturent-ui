import { University } from "./inputs/Institution";

interface UniversityProps {
  university: University;
  toggleUniversity: (featureId: number) => void;
  selectedUniversity?: number[]
}

const University = ({ university, toggleUniversity, selectedUniversity } : UniversityProps) => {
  return (
    <div
      onClick={() => toggleUniversity(university.id)}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-foreground
        transition
        cursor-pointer
        ${selectedUniversity ? 'cursor-pointer' : ''}
        ${selectedUniversity?.includes(university?.id) ? 'border-foreground' : 'border-muted'}
      `}
    >
      <div className="font-semibold">
        {university.name}
      </div>
    </div>
  )
}

export default University;

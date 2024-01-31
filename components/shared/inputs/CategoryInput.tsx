import { IconType } from "react-icons";

interface CategoryInputProps {
  icon?: IconType,
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick
}) => {
  return (
    <div
      onClick={() => onClick(label)}
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
        ${selected ? 'border-foreground' : 'border-muted'}
      `}
    >
      {Icon ? (
        <Icon size={30} />
      ) : null}
      <div className="font-semibold">
        {label}
      </div>
    </div>
   );
}

export default CategoryInput;

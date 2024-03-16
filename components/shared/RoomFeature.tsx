import { IFeature } from "@/types/Feature";

interface RoomFeatureProps {
  feature: IFeature;
  toggleFeature: (featureId: number) => void;
  selectedFeatures?: number[]
}

const RoomFeature = ({ feature, toggleFeature, selectedFeatures } : RoomFeatureProps) => {
  return (
    <div
      className={`
      min-w-[10rem]
      h-[8rem]
      flex
      flex-col
      gap-2
      justify-center
      items-center
      bg-accent
      rounded-xl
      border-2
      hover:border-foreground
      ${selectedFeatures ? 'cursor-pointer' : ''}
      ${selectedFeatures?.includes(feature?.id) ? 'border-foreground' : 'border-muted'}
      `}
      onClick={() => toggleFeature(feature.id)}
    >
      {<feature.icon size={25} />}
      <p>{feature.name}</p>
    </div>
  )
}

export default RoomFeature;

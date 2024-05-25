type RoomType = 'Single' | 'Sublet' | 'Flat';
type Gender = 'Male' | 'Female';

interface Filters {
  gender: Record<Gender, boolean>;
  roomType: Record<RoomType, boolean>;
}

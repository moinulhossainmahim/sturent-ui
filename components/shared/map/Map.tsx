import { MapContainer, TileLayer, MapContainerProps } from 'react-leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import Pin from './Pin';
import { IListing } from '@/types';

interface MapsProps {
  items: IListing[];
}

const Map: React.FC<MapsProps> = ({ items }) => {
  const mapProps: MapContainerProps = {
    center: [23.8041, 90.4152],
    zoom: 7,
    scrollWheelZoom: false,
    className: "w-full h-full rounded-lg"
  };

  return (
    <MapContainer {...mapProps}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map(item => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;

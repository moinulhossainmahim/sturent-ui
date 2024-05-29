import { IListing } from "@/types";
import Link from "next/link";
import { Marker, Popup } from "react-leaflet";

interface PinProps {
  item: IListing;
}

function Pin({ item } : PinProps) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-5">
          <img src={item.featuredImg} alt="" className="w-16 h-12 object-cover rounded" />
          <div className="flex flex-col justify-between">
            <Link href={`/listings/${item.id}`} className="text-blue-500 hover:underline">{item.title}</Link>
            <span>{item.roomCount} bedroom</span>
            <b>&#2547; {item.price}k</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;

import { useState } from "react";
import { roomList } from "../mocks/reservation";
import Link from "next/link";

export default function Location() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const onHandleClick = (id) => {
    const location = roomList.find((location) => location.id === id);
    setSelectedLocation(location);
  };

  const onLocationRender = () =>
    roomList.map(({ imageLocation, name, id }) => (
      <img
        onClick={() => onHandleClick(id)}
        src={imageLocation}
        alt={name}
        key={id}
      />
    ));

  return (
    <div>
      {selectedLocation ? (
        <div>
          <h2>{selectedLocation.name}</h2>
          <p>{selectedLocation.description}</p>
          <img src={selectedLocation.imageLocation} alt={selectedLocation.name} />
          <p>Price: {selectedLocation.price}</p>
          <Link href="/" className="button">Go back to locations</Link>
        </div>
      ) : (
        <>
    
          <h2>Locations</h2>
          {roomList.length ? onLocationRender() : <p>Loading...</p>}
        </>
      )}
    </div>
  );
}
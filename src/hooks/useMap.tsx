import { useRef, useState, useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import AdminMarker from '@/components/Marker/AdminMarker';

const DEFAULT_CENTER = { latitude: 37.2821, longitude: 127.0463 };

export const useMap = () => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  const mapRef = useRef<HTMLDivElement | null>(null);

  const initializeMap = (latitude: number, longitude: number) => {
    if (mapRef.current) {
      const mapOptions = {
        center: new naver.maps.LatLng(latitude, longitude),
        zoom: 16,
      };

      const map = new naver.maps.Map(mapRef.current, mapOptions);
      setMap(map);

      return map;
    }
  };

  const addMarker = (map: naver.maps.Map, latitude: number, longitude: number) => {
    const markerOptions = {
      map: map,
      position: new naver.maps.LatLng(latitude, longitude),
      icon: {
        content: renderToString(<AdminMarker />),
        size: new naver.maps.Size(28, 36),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(14, 36),
      },
    };

    new naver.maps.Marker(markerOptions);
  };

  useEffect(() => {
    initializeMap(DEFAULT_CENTER.latitude, DEFAULT_CENTER.longitude);
  }, []);

  return { map, mapRef, addMarker };
};

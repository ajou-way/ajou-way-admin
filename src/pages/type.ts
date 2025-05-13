export type MarkerType = 'elevator' | 'impariment_toilet' | 'ramp' | 'note' | 'audio_device' | 'support_office';

export interface Marker {
  id: number;
  markerType: MarkerType;
  geometry: {
    type: string;
    coordinates: number[];
  };
  remarks: string;
}

export interface MarkerDetail {
  id: number;
  name: string;
}

export interface Building {
  id: number;
  name: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  remarks?: string;
  imgUrl?: string;
  amenityInfoTypes?: string[];
}

export interface AmenityInfo {
  id: number;
  buildingId: number;
  type: string;
  properties: Record<string, unknown>;
}

export interface BuildingDetail {
  id: number;
  name: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  remarks?: string;
  imgUrl?: string;
  amenityInfos?: AmenityInfo[];
}

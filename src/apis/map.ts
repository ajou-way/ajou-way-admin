import type { Building, BuildingDetail } from '@/pages/type';

import fetcher from '@/apis/fetcher';

export const getBuildings = async () => {
  return await fetcher.get<{ result: Building[] }>({ endpoint: '/api/maps/buildings' });
};

export const getBuildingDetail = async (id: number) => {
  return await fetcher.get<BuildingDetail>({ endpoint: `/api/maps/buildings/${id}` });
};

interface BuildingDetailRequest {
  id: number;
  type: string;
  contents: string;
}

export const addBuildingDetail = async ({ id, type, contents }: BuildingDetailRequest) => {
  return await fetcher.post({
    endpoint: `/api/admin/maps/buildings/${id}/amenity`,
    body: JSON.stringify({
      amenityInfoType: type,
      contents,
    }),
  });
};

interface CreateImageURLResponse {
  imageUrl: string;
}

export const createImageURL = async ({ image }: { image: File }) => {
  return await fetcher.post<CreateImageURLResponse>({
    endpoint: '/api/utils/images/upload',
    body: JSON.stringify({
      file: image,
    }),
  });
};

interface AddMarkerRequest {
  latitude: number;
  longitude: number;
  title: string;
  contents: string;
  targetMajors: string[];
  deadLine: string;
}

export const addMarker = async ({ latitude, longitude, title, contents, targetMajors, deadLine }: AddMarkerRequest) => {
  return await fetcher.post({
    endpoint: '/api/admin/maps/markers',
    body: JSON.stringify({
      title,
      contents,
      geometry: {
        type: 'Point',
        coordinates: [longitude, latitude],
      },
      targetMajors,
      deadline: deadLine,
    }),
  });
};

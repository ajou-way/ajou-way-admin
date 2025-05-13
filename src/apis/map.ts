import type { Building, BuildingDetail, AmenityInfo } from '@/pages/type';

import fetcher from '@/apis/fetcher';

export const getBuildings = async () => {
  return await fetcher.get<{ result: Building[] }>({ endpoint: '/maps/buildings' });
};

export const getBuildingDetail = async (id: number) => {
  return await fetcher.get<BuildingDetail>({ endpoint: `/maps/buildings/${id}` });
};

export const addBuildingDetail = async ({ info }: { info: Omit<AmenityInfo, 'id'> }) => {
  return await fetcher.post({ endpoint: `/maps/amenities`, body: JSON.stringify(info) });
};

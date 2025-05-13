import { useQuery } from '@tanstack/react-query';

import { getBuildings } from '@/apis/map';

export const useBuildingsQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['buildings'],
    queryFn: getBuildings,
  });

  return { buildings: data?.result ?? [], isLoading };
};

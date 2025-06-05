import { useQuery } from '@tanstack/react-query';

import { getAccessToken } from '@/apis/auth';

export const useAuthQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['accessToken'],
    queryFn: getAccessToken,
  });

  return { accessToken: data ?? '', isLoading };
};

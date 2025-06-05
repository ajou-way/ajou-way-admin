// import fetcher from '@/apis/fetcher';

// export const getAccessToken = async () => {
//   return await fetcher.get<string>({ endpoint: '/test/admin-token' });
// };

import { API_URL } from '@/apis/fetcher';

export const getAccessToken = async (): Promise<string> => {
  const response = await fetch(`${API_URL}/test/admin-token`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch access token: ${errorText}`);
  }

  const token = await response.text();

  return token;
};

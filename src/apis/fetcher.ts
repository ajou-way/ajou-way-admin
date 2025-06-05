interface RequestProps {
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH';
  endpoint: string;
  queryParams?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
  body?: string;
}

type FetchProps = Omit<RequestProps, 'method'>;

export const API_URL = import.meta.env.VITE_API_URL;

const fetcher = {
  async request<T>({ method, endpoint, queryParams, body, headers }: RequestProps): Promise<T> {
    const url = new URL(`${API_URL}${endpoint}`);

    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null) url.searchParams.append(key, String(value));
      });
    }

    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      if (!headers) headers = {};
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    const response = await fetch(url.toString(), {
      method,
      headers: headers && headers,
      body: body && body,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return response.json();
  },

  get<T>(props: FetchProps) {
    return this.request<T>({ ...props, method: 'GET' });
  },

  post<T>(props: FetchProps) {
    return this.request<T>({
      ...props,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  },

  delete<T>(props: FetchProps) {
    return this.request<T>({
      ...props,
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  },

  patch<T>(props: FetchProps) {
    return this.request<T>({
      ...props,
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    });
  },
};

export default fetcher;

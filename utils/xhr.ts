import axios, { AxiosRequestConfig } from "axios";

interface XhrResponse {
  data: string | object | null;
  error: Error | null;
}

export const post = async (
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any,
  config?: AxiosRequestConfig,
): Promise<XhrResponse> => {
  try {
    const result = await axios.post(url, data, config);
    return { data: result, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
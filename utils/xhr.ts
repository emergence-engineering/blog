import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface XhrResponse {
  data: string | AxiosResponse | null;
  error: unknown;
}

const logger = console;

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
    logger.error(error);
    return { data: null, error };
  }
};

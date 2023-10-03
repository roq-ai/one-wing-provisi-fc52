import queryString from 'query-string';
import { IterationInterface, IterationGetQueryInterface } from 'interfaces/iteration';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getIterations = async (
  query?: IterationGetQueryInterface,
): Promise<PaginatedInterface<IterationInterface>> => {
  return fetcher('/api/iterations', {}, query);
};

export const createIteration = async (iteration: IterationInterface) => {
  return fetcher('/api/iterations', { method: 'POST', body: JSON.stringify(iteration) });
};

export const updateIterationById = async (id: string, iteration: IterationInterface) => {
  return fetcher(`/api/iterations/${id}`, { method: 'PUT', body: JSON.stringify(iteration) });
};

export const getIterationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/iterations/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteIterationById = async (id: string) => {
  return fetcher(`/api/iterations/${id}`, { method: 'DELETE' });
};

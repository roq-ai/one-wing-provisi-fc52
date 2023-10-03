import queryString from 'query-string';
import { RequirementInterface, RequirementGetQueryInterface } from 'interfaces/requirement';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRequirements = async (
  query?: RequirementGetQueryInterface,
): Promise<PaginatedInterface<RequirementInterface>> => {
  return fetcher('/api/requirements', {}, query);
};

export const createRequirement = async (requirement: RequirementInterface) => {
  return fetcher('/api/requirements', { method: 'POST', body: JSON.stringify(requirement) });
};

export const updateRequirementById = async (id: string, requirement: RequirementInterface) => {
  return fetcher(`/api/requirements/${id}`, { method: 'PUT', body: JSON.stringify(requirement) });
};

export const getRequirementById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/requirements/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteRequirementById = async (id: string) => {
  return fetcher(`/api/requirements/${id}`, { method: 'DELETE' });
};

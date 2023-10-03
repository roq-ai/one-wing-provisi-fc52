import queryString from 'query-string';
import { QuestionnaireInterface, QuestionnaireGetQueryInterface } from 'interfaces/questionnaire';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getQuestionnaires = async (
  query?: QuestionnaireGetQueryInterface,
): Promise<PaginatedInterface<QuestionnaireInterface>> => {
  return fetcher('/api/questionnaires', {}, query);
};

export const createQuestionnaire = async (questionnaire: QuestionnaireInterface) => {
  return fetcher('/api/questionnaires', { method: 'POST', body: JSON.stringify(questionnaire) });
};

export const updateQuestionnaireById = async (id: string, questionnaire: QuestionnaireInterface) => {
  return fetcher(`/api/questionnaires/${id}`, { method: 'PUT', body: JSON.stringify(questionnaire) });
};

export const getQuestionnaireById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/questionnaires/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteQuestionnaireById = async (id: string) => {
  return fetcher(`/api/questionnaires/${id}`, { method: 'DELETE' });
};

import queryString from 'query-string';
import { ChatbotInterface, ChatbotGetQueryInterface } from 'interfaces/chatbot';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChatbots = async (query?: ChatbotGetQueryInterface): Promise<PaginatedInterface<ChatbotInterface>> => {
  return fetcher('/api/chatbots', {}, query);
};

export const createChatbot = async (chatbot: ChatbotInterface) => {
  return fetcher('/api/chatbots', { method: 'POST', body: JSON.stringify(chatbot) });
};

export const updateChatbotById = async (id: string, chatbot: ChatbotInterface) => {
  return fetcher(`/api/chatbots/${id}`, { method: 'PUT', body: JSON.stringify(chatbot) });
};

export const getChatbotById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/chatbots/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteChatbotById = async (id: string) => {
  return fetcher(`/api/chatbots/${id}`, { method: 'DELETE' });
};

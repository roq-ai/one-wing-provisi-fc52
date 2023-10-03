const mapping: Record<string, string> = {
  chatbots: 'chatbot',
  companies: 'company',
  iterations: 'iteration',
  questionnaires: 'questionnaire',
  requirements: 'requirement',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

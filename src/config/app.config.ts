interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Graphic Designer'],
  customerRoles: [],
  tenantRoles: ['Client', 'Graphic Designer'],
  tenantName: 'Company',
  applicationName: 'One Wing Provisions',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage company designs',
    'Create and edit graphic content',
    'Manage questionnaire designs',
    'Manage chatbot designs',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/885456fb-87df-4887-a8ef-2b7b1a7bfaf6',
};

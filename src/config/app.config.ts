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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View employee information',
    'View vacation information',
    'View payroll information',
  ],
  ownerAbilities: [
    'Manage user data',
    'Manage company data',
    'Manage employee data',
    'Manage vacation and payroll records',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/334fb4ff-97e1-4b56-86c7-0041aad7d8c2',
};

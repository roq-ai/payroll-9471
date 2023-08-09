interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Payroll Administrator'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee'],
  tenantName: 'Organization',
  applicationName: 'Payroll',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};

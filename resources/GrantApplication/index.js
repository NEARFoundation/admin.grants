const AdminJS = require('adminjs');
const GrantApplication = require('api.grants/modules/GrantApplication/GrantApplicationModel');
const config = require('../../config/app');

const grantApplication = {
  resource: GrantApplication,
  options: {
    actions: {
      signAgreement: {
        icon: 'DocumentSigned',
        actionType: 'record',
        handler: (request, response, context) => {
          const { record } = context;

          record.params.config = {
            backendAdminToken: config.backendAdminToken,
            backendHost: config.backendHost,
          };

          return {
            record: record.toJSON(),
          };
        },
        component: AdminJS.bundle('./signature.component'),
      },
    },
  },
};

module.exports = grantApplication;

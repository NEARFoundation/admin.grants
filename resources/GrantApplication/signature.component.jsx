import { Box } from '@adminjs/design-system';

const Signature = (props) => {
  const { record } = props;

  const url =
    record.params.config.backendHost +
    '/admin/' +
    record.params.config.backendAdminToken +
    '/accounts/' +
    record.params.nearId +
    '/grants/' +
    record.params.id +
    '/agreement/signature';

  return <iframe width="100%" style={{ height: '70vh' }} src={url}></iframe>;
};

export default Signature;
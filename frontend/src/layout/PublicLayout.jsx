import { Layout } from './Layout';

export const PublicLayout = ({
  children
}) => {
  return (
    <Layout>
      <>{children}</>
    </Layout>
  );
};

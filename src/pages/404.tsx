import * as React from 'react';

import Layout from '../components/layout';

export default class NotFoundPage extends React.Component<{}, {}> {
  override render() {
    return <Layout title="Not Found" />;
  }
}

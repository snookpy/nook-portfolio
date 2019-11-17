import * as React from 'react';
import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  };

  export interface ILayoutProps {
    children?: React.ReactNode;
  }
  
  const Layout: React.SFC<ILayoutProps> = ({children}) => (
    <div style={layoutStyle}>
      <Header />
      {children}
    </div>
  );
  
  export default Layout;
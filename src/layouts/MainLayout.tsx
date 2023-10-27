import React, {ReactNode} from 'react'
import { Footer, Header } from '../components/layouts'

type LayoutProps = {
  //   title: string;
  headerColor: string;
  children: ReactNode;
};

function MainLayout({headerColor, children}: LayoutProps) {
  return (
    <div style={{ width: '100vw'}}>
      <Header color={headerColor} />
          <div style={{marginTop: '5vh'}}>{children}</div>
          <Footer />
    </div>
  )
}

export default MainLayout
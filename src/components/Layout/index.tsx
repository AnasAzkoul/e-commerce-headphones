import React from 'react';
import Header from '../navbar';

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Header />
      <main>
        <div className='max-w-7xl mx-auto bg-bg-light'>
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout;

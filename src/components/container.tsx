import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='container mx-auto px-4 flex justify-center flex-col items-center'>
      {children}
    </div>
  );
};

export default Container;
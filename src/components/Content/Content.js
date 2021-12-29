import { VariableSizeList } from 'react-window';

import { ContentHeader } from '../index';

export const Content = ({ children, itemCount }) => {
  return (
    <>
      <ContentHeader />
      <VariableSizeList
        height={500}
        width={700}
        itemCount={itemCount}
        itemSize={() => 60}
      >
        {({ index, style }) => children({ index, style })}
      </VariableSizeList>
    </>
  );
};

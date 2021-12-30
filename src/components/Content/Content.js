import { useSubscription } from '@apollo/client';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
  WindowScroller,
} from 'react-virtualized';

import { Box } from '@mui/system';

export const Content = ({ children, itemCount }) => {
  // const rowRenderer = ({ key, index, style, ...rest }) => {

  //   return children({ key, index, style });
  // };

  return (
    <Box
      sx={{
        flex: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse',
        overflowY: 'scroll',
      }}
    >
      {children}
    </Box>
  );
};

{/* <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          rowCount={itemCount}
          rowHeight={60} // TODO: adjust
          rowRenderer={rowRenderer}
          width={width}
        />
      )}
    </AutoSizer> */}

import { Box } from '@mui/system';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
  WindowScroller,
} from 'react-virtualized';

export const Content = ({ children, itemCount }) => {
  const rowRenderer = ({ key, index, style, ...rest }) => {
    console.log(rest);
    return children({ key, index, style });
  };

  return (
    <Box
      flex="auto"
      display="flex"
      flexDirection="column"
    >
      <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          rowCount={itemCount}
          rowHeight={60} // TODO: adjust
          rowRenderer={rowRenderer}
          width={width}
        />
      )}
    </AutoSizer>
    </Box>
  );
};

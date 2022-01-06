import { createTheme } from '@mui/system';
import { useContext } from 'react';

export const theme = createTheme({

});

export const useTheme = () => useContext(theme);

import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme , ThemeProvider} from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    Green : {
      main : '#c9fc3b'
    }
  },
});



export default function Click(props){
  return (<ThemeProvider theme={theme}><Button variant='outlined' color='Green'>{props.text}</Button></ThemeProvider>)
}
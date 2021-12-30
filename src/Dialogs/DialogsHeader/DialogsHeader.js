import { Paper, Typography } from "@mui/material"

export const DialogsHeader = ({ children }) => {

  return (
    <Paper
        variant="outlined"
        sx={{
          height: 'fit-content',
        }}
      >
    <Typography align="center">
      Title
    </Typography>
  </Paper>
  )
}

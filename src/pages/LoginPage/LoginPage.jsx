import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import { green } from '@mui/material/colors';
import {
  Checkbox,
  MessngrIcon,
  TextField,
} from '../../common/components';
import { useLogin } from '../../common/hooks';
import { PAGE_SIGN_UP } from '../../constants';

export function LoginPage() {
  const { control, handleSubmit } = useForm();

  const { login, isLoading } = useLogin();

  const onSubmit = (variables) => login({ variables });

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MessngrIcon
          sx={{
            width: 96,
            height: 96,
          }}
        />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1 }}
        >

          <TextField
            control={control}
            name="login"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            autoFocus
          />
          <TextField
            control={control}
            name="password"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
          />
          <Checkbox
            control={control}
            name="isRememberMe"
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
            {isLoading && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Button>

          <Grid container>
            <Grid item xs>
              <Link
                to="#"
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                to={PAGE_SIGN_UP}
              >
                Do not have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

import { useLazyQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material';

import { LOGIN } from '../../GraphQL/queries';

import {
  Checkbox,
  TextField,
} from '../../common/components';
import { ACTION_LOGIN, PAGE_HOME, PAGE_SIGN_UP } from '../../constants';
import { useAuth } from '../../utils';

export const LoginPage = () => {
  const { authDispatch } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [login, { data, errors, loading }] = useLazyQuery(LOGIN, {
    onError(err) {
      console.log(err);
    },
    onCompleted({ login }) {
      authDispatch({type: ACTION_LOGIN, payload: data});

      history.push({
        pathname: location.state?.backPathname ?? PAGE_HOME,
        search: location.search,
      })
    }
  })
  const { control, handleSubmit } = useForm();

  const onSubmit = (variables) => {
    login({ variables });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        minHeight: '100vh'
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
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
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item s>
              <Link href={PAGE_SIGN_UP} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

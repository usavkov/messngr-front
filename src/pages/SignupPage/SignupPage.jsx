import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar, Box, Button, Grid, Paper, Typography,
} from '@mui/material';

import { PAGE_LOGIN } from '../../constants';
import { Checkbox, TextField } from '../../common/components';
import { useLogin, useSignup } from '../../common/hooks';

import './SignupPage.scss';

export function SignupPage() {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm();

  const { signup } = useSignup();
  const { login } = useLogin();

  const onSubmit = (variables) => {
    console.log(isValid);

    signup({ variables }).then(({ errors }) => {
      !errors
        && login({
          variables: {
            login: variables.username,
            password: variables.password,
          },
        });
    });
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  autoFocus
                  control={control}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="family-name"
                  control={control}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  control={control}
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  control={control}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  required
                  size="small"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  control={control}
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  required
                  size="small"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  control={control}
                  fullWidth
                  id="confirm-password"
                  label="Confirm password"
                  name="confirmPassword"
                  required
                  size="small"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <Checkbox
                  control={control}
                  label={(
                    <Typography variant="caption">
                      I have read and accept the
                      {' '}
                      <Link to="">Privacy Statement</Link>
                    </Typography>
                  )}
                  name="acceptPolicy"
                  size="small"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              size="small"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography align="center" variant="caption">
                  <Link to={PAGE_LOGIN}>Already have an account? Sign in</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

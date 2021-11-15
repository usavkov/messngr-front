import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { gql, useLazyQuery } from '@apollo/client';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';

import { ACTION_LOGIN, PAGE_HOME, PAGE_SIGN_UP } from '../../constants';
import { Input } from '../../components';
import { useAuth } from '../../utils';

const LOGIN = gql`
  query Login(
    $login: String!
    $password: String!
  ) {
    login(
      login: $login
      password: $password
    ) {
      id
      username
      email
      createdAt
      token
    }
  }
`;

export const LoginPage = () => {
  const [, authDispatch] = useAuth();
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
  const { register, handleSubmit } = useForm();

  const onSubmit = (variables) => {
    login({ variables })
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={10} md={8} lg={6}>
          <h1 className='py-5'>Login</h1>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              id='login'
              label='Login'
              placeholder='Login'
              labelType='floating'
              className='mb-3'
              register={register}
              required
            />
            <Input
              id='password'
              label='Password'
              type='password'
              placeholder='Password'
              labelType='floating'
              className='mb-3'
              register={register}
              required
            />
            <Input
              id='isRememberMe'
              type='checkbox'
              label='Remember me'
              className='mb-5'
              register={register}
              inline
            />

            <Button
              className='mb-4 text-center'
              variant='primary'
              type='submit'
            >
              Submit
            </Button>
          </Form>

          <span className='d-flex justify-content-center'>
            <small className='mx-2'>
              Don't have an account? <Link to={PAGE_SIGN_UP} children='Sign up' />
            </small>
            <small className='mx-2'>
              Forgot password? <Link to='#' children='Click here' />
            </small>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

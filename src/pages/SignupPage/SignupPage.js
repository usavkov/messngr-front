import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { InfoCircle } from 'react-bootstrap-icons';
import { Link, useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import { PAGE_LOGIN } from '../../constants';
import { Input } from '../../components';

import './SignupPage.scss';

const SIGN_UP = gql`
  mutation Signup(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    signup(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      username
      email
      createdAt
    }
  }
`;

export const SignupPage = () => {
  const history = useHistory();
  const [signup, { data, loading, error }] = useMutation(SIGN_UP, {
    onError(err) {
      console.dir(err);
    },
    update(_, res) {
      console.log(res);

    },
  });
  const { register, handleSubmit, formState } = useForm();
  const { isDirty, isValid } = formState;

  const onSubmit = (variables) => {
    console.log(isValid);
    signup({ variables });
  };

  return (
    <Container fluid>
      <Row className='main-wrapper'>
        <Col className='bg-info d-flex justify-content-center align-items-center'>
          <div
            className='d-flex justify-content-center align-items-center'
            style={{
              borderRadius: '100%',
              height: 200,
              width: 200,
              background: 'white',
              textAlign: 'center',
              fontSize: 24,
            }}
          >
            Messngr
          </div>
        </Col>

        <Col lg={5}>
          <Row className='justify-content-center'>
            <Col xs={12} md={10} lg={8}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='py-5'>Sign up</h1>
                <Input
                  id='username'
                  label={<Form.Label>Username</Form.Label>}
                  placeholder='Username'
                  className='mb-2'
                  register={register}
                  registerOptions={{
                    maxLength: { value: 5, message: 'ASfasf' },
                    required: true,
                  }}
                  required
                />
                <Input
                  id='email'
                  type='email'
                  label={<Form.Label>Email</Form.Label>}
                  placeholder='Email'
                  labelIcon={InfoCircle}
                  popoverContent="We'll never share your email with anyone else!"
                  className='mb-2'
                  register={register}
                  required
                />
                <Input
                  id='password'
                  type='password'
                  label={<Form.Label>Password</Form.Label>}
                  placeholder='Password'
                  className='mb-2'
                  register={register}
                  required
                />
                <Input
                  id='confirmPassword'
                  type='password'
                  label={<Form.Label size='sm'>Confirm password</Form.Label>}
                  placeholder='Confirm password'
                  className='mb-4'
                  register={register}
                  required
                />
                <Button className='mb-4' variant='success' type='submit'>
                  Submit
                </Button>

                <small className='text-center d-block'>
                  Already have an account?{' '}
                  <Link to={PAGE_LOGIN} children='Login' />
                </small>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

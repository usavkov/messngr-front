import { useForm } from 'react-hook-form';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { PAGE_SIGN_UP } from '../../constants';

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={10} md={8} lg={6}>
          <h1 className='sign-up-form_heading'>Login</h1>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mb-3' controlId='emailGroup'>
              <Form.Label>Login</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter login'
                {...register('login')}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='passwordGroup'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                {...register('password')}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check
                type='checkbox'
                label='Remember me'
                {...register('isRememberMe')}
              />
            </Form.Group>
            <Button className='mb-3' variant='primary' type='submit'>
              Submit
            </Button>
          </Form>

          <ButtonGroup className="mb-5">
            <Button to={PAGE_SIGN_UP} as={Link} variant='link' size='sm'>
              Don't have an account?
            </Button>
            <Button to='#' as={Link} variant='link' size='sm'>
              Forgot password?
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
} from 'react-bootstrap';

import { PAGE_SIGN_UP } from '../../constants';
import { Input } from '../../components';

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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

            <Button className='mb-4' variant='primary' type='submit'>
              Submit
            </Button>
          </Form>

          <ButtonGroup className='mb-5'>
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

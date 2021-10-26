import { useForm } from 'react-hook-form';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
import { InfoCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import { PAGE_LOGIN } from '../../constants';
import { Input } from '../../components';

import './SignupPage.scss';

export const SignupPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
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
                <h1
                  className='py-5'
                >
                  Sign up
                </h1>
                <Input
                  id='username'
                  label={<Form.Label>Username</Form.Label>}
                  placeholder='Username'
                  className="mb-2"
                  register={register}
                  required
                  />
                <Input
                  id='email'
                  type="email"
                  label={<Form.Label>Email</Form.Label>}
                  placeholder='Email'
                  labelIcon={InfoCircle}
                  popoverContent="We'll never share your email with anyone else!"
                  className="mb-2"
                  register={register}
                  required
                />
                <Input
                  id='password'
                  type='password'
                  label={<Form.Label>Password</Form.Label>}
                  placeholder='Password'
                  className="mb-2"
                  register={register}
                  required
                />
                <Input
                  id='confirmPassword'
                  type='password'
                  label={<Form.Label size="sm">Confirm password</Form.Label>}
                  placeholder='Confirm password'
                  className="mb-4"
                  register={register}
                  required
                />
                <Button className='mb-3' variant='success' type='submit'>
                  Submit
                </Button>
              </Form>

              <Button
                className='mb-3'
                to={PAGE_LOGIN}
                as={Link}
                variant='link'
                size='sm'
              >
                Already have an account?
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

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

import './SignupPage.scss';

export const SignupPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
              <h1 className='sign-up-form_heading'>Sign up</h1>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className='mb-3' controlId='emailGroup'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Username'
                    {...register('email')}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='emailGroup'>
                  <Form.Label>Email address</Form.Label>
                  <OverlayTrigger
                    overlay={
                      <Popover id='popover-basic'>
                        <Popover.Body>
                          We'll never share your email with anyone else!
                        </Popover.Body>
                      </Popover>
                    }
                    placement='auto'
                  >
                    <InfoCircle color='darkgray' className='mx-2' />
                  </OverlayTrigger>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    {...register('email')}
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
                <Button className='mb-3' variant='primary' type='submit'>
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

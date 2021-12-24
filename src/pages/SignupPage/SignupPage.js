import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { PAGE_LOGIN } from '../../constants';
import { SIGN_UP } from '../../GraphQL/mutations';

import './SignupPage.scss';
import { useSignup } from '../../common/hooks';

export const SignupPage = () => {
  const {
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const { signup } = useSignup();

  const onSubmit = (variables) => {
    console.log(isValid);
    signup({ variables });
  };

  return (
    <>Signup</>
  );
};

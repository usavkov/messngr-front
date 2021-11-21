import { Navigation } from "../../components";

export const GuestPage = () => {
  const links = [
    { to: 'login', label: 'Login' },
    { to: 'signup', label: 'Sign up' },
  ];

  return <Navigation links={links} />
};

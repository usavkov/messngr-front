import { Link } from 'react-router-dom';

export function GuestPage() {
  return (
    <>
      Guest
      <Link to="/login">Login</Link>
    </>
  );
}

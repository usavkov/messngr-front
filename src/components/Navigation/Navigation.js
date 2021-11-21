import { Nav } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';

export const Navigation = ({ links, ...rest }) => {
  const { path } = useRouteMatch();

  return (
    <Nav className='justify-content-end' {...rest}>
      {links.map(({ to = '', label, ...rest }) => (
        <Nav.Link
          as={Link}
          to={`${path}${to}`}
          key={`link-to-${to}`}
          {...rest}
        >
          {label}
        </Nav.Link>
      ))}
    </Nav>
  );
};

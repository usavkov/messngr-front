import { NavLink, useRouteMatch } from 'react-router-dom';

export const Navigation = ({ links }) => {
  const { path } = useRouteMatch()

  return links.map(({ to, label }) => (
    <NavLink to={`${path}/${to}`} key={`link-to-${to}`}>
      {label}
    </NavLink>
  ));
};

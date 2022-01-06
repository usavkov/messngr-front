import { useRouteMatch } from 'react-router-dom';

export function AdminPage() {
  const { path } = useRouteMatch();

  return (
    <>
      Admin
      {path}
    </>
  );
}

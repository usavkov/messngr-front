import { Container, Row, Col } from "react-bootstrap";
import { Switch, useRouteMatch } from "react-router";

import { DynamicRoute, Navigation, UsersList } from "../../components";

export const AdminPage = () => {
  const { path } = useRouteMatch();

  const links = [
    { to: '/users', label: 'Users' },
  ];

  return (
    <Container className="m-0 mw-100">
      <Row className="m-0">
        <Col xs lg="2">
          <Navigation links={links} className="flex-column" />
        </Col>
        <Col>
          <Switch>
            <DynamicRoute exact path={`${path}/users`} component={UsersList} />
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

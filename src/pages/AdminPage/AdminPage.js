import { Container, Row, Col } from "react-bootstrap";
import { Switch, useRouteMatch } from "react-router";

import { DynamicRoute, UsersList } from "../../components";

export const AdminPage = () => {
  const { path } = useRouteMatch();

  return (
    <Container className="m-0 mw-100">
      <Row className="m-0">
        <Col>
          <Switch>
            <DynamicRoute exact path={`${path}/users`} component={UsersList} />
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

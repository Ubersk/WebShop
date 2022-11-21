import React, { useContext } from "react";
import { Context } from "../index";
import { Button, Container, Nav, NavLink } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useNavigate();
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} href={SHOP_ROUTE}>
          Клиент сообщений
        </NavLink>
        {user.isAuth ? (
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-success"}
              href={ADMIN_ROUTE}
              className={"ms-2"}
            >
              Админ панель
            </Button>
            <Button
              variant={"outline-success"}
              onClick={() => logOut()}
              className={"ms-2"}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto" style={{ color: "white", margin: "5" }}>
            <Button
              variant={"outline-success"}
              style={{ color: "white" }}
              className={"ms-2"}
              onClick={() => history(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
            <Button
              variant={"outline-success"}
              style={{ color: "white" }}
              onClick={() => history(REGISTRATION_ROUTE)}
            >
              Регистрация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;

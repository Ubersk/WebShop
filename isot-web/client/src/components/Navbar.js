import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, NavLink} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {Route} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
        return (
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <NavLink  style={{color:'white'}} to={{SHOP_ROUTE}}>Клиент сообщений</NavLink>
                        {user.isAuth ?
                            <Nav className="ms-auto" style={{color: 'white'}}>
                                <Button  variant={"outline-success"}>Админ панель</Button>
                                <Button variant={"outline-success"} className={'ms-2'}>Выйти</Button>
                            </Nav>
                            :
                            <Nav className="ms-auto" style={{color: 'white'}}>
                                <Button variant={"outline-success"} className={'ms-2'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                                <Button variant={"outline-success"} >Регистрация</Button>
                            </Nav>
                        }
                    </Container>

                </Navbar>
                );
});

export default NavBar;
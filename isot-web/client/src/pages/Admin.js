import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-success"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}>
                Добавить пользователя(dev)
            </Button>
            <Button
                variant={"outline-danger"}
                className="mt-2 p-2"
                onClick={() => setBrandVisible(true)}>
                Удалить пользователя
            </Button>
            <Button
                variant={"outline-danger"}
                className="mt-5 p-2"
            onClick={() => setTypeVisible(true)}>
                Удалить сообщения
            </Button>
            <Button
                variant={"outline-warning"}
                className="mt-2 p-2"
                onClick={() => setTypeVisible(true)}>
                Восстановить сообщения(dev)
            </Button>
            <Button
                variant={"outline-danger"}
                className="mt-5 p-2"
            onClick={() => setDeviceVisible(true)}>
                Удалить беседу
            </Button>
            <Button
                variant={"outline-warning"}
                className="mt-2 p-2"
                onClick={() => setTypeVisible(true)}>
                Восстановить беседу(dev)
            </Button>

            <Button
                variant={"outline-success"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}>
                Добавить тип
            </Button>
            <Button
                variant={"outline-success"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}>
                Добавить брэнд
            </Button>
            <Button
                variant={"outline-success"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}>
                Добавить устройство
            </Button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;
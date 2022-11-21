import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () =>
    {
        setInfo([...info,{title:'', description:'', number: Date.now()}])
    }
    const removeInfo = (number) =>
    {
        setInfo(info.filter(i=>i.number !== number))
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                       <Dropdown className="mt-2 mb-2">
                           <DropdownToggle>Выберите тип</DropdownToggle>
                           <DropdownMenu>
                               {device.types.map(type =>
                               <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                               )}
                           </DropdownMenu>
                       </Dropdown>
                 <Dropdown className="mt-2 mb-2">
                           <DropdownToggle>Выберите брэнд</DropdownToggle>
                           <DropdownMenu>
                               {device.brands.map(brand =>
                               <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                               )}
                           </DropdownMenu>
                       </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите название устройства"}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите стоимость устройства"}
                        type = "number"
                    />
                    <Form.Control
                        className="mt-3"
                        type = "file"
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое устройство
                    </Button>
                        {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить</Button>
                            </Col>
                        </Row>
                        )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
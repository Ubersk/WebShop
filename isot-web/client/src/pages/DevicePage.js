import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Context} from "../index";
import Image from "react-bootstrap/Image";
import iconmsg2 from '../Assets/iconmsg2.png'
const DevicePage = () => {
   const device = {id:1, name:'12 pro', price: 10000, rating:0, img:'0f374242-47fc-4cf8-abf1-755b8016389b.jpg'}
    const  description = [
        {id:1, title:'Тема сообщения', description: 'Праздник'},
        {id:2, title:'Автор', description: 'Вы'},
        {id:3, title:'Телефон', description: '2282'},
        {id:4, title:'Компьютер', description: 'N-059'},


    ]
    return (
        <Container className={"mt-3"}>
            <Row>

                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${iconmsg2}) no-repeat center center`, width:240, height:240, backgroundSize: `cover`}}
                        >{device.rating}</div>
                    </Row>

                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width:300, height:300, fontSize:32, border: `5px solid lightgray`}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                {description.map((info, index) =>
                <Row key={info.id} style={{background: index % 2 === 0 ? 'AppWorkspace' : 'transparent', padding:10}}>
                    {info.title}: {info.description}
                </Row>

                )}
            </Row>

        </Container>
    );
};

export default DevicePage;
import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import iconmsg from '../Assets/iconmsg.png'
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE} from "../utils/consts";
const DeviceItem = ({device}) => {
    const history = useNavigate()
    return (
        <Col md={3} className="mt-3" onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: "pointer"}} border={"info"}>
                <Image width={150} height={150} src={device.img}/>
                <div className={"text-black 50 justify-content-between align-items-center"}>
                     <div>Сообщение...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={12} height={12} src={iconmsg}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
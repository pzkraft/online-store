import React, {useContext} from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png';
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import {Context} from "../index";

const DeviceItem = ({oneDevice}) => {
    const {device} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + oneDevice.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + oneDevice.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">                   
                    {device.brands.map(brand =>
                    brand.id === oneDevice.brandId ?
                        <div>
                            {brand.name}
                        </div>
                        :
                        null
                    )}
                    <div className="d-flex align-items-center">
                        <div>{oneDevice.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{oneDevice.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;

import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";


const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
            <Row className="d-flex">
                {device.devices.map(oneDevice =>
                     <DeviceItem key={oneDevice.id} oneDevice={oneDevice}/>
                )}
            </Row>
    );
});

export default DeviceList;

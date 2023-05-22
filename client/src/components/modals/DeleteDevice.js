import React, {useContext, useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown, Row} from "react-bootstrap";
import {Context} from "../../index";
import { observer } from 'mobx-react-lite';
import {deleteDevice, fetchDevices} from "../../http/deviceAPI";

const DeleteDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)

    const removeDevice = () => {
        deleteDevice(device.selectedDevice.id).then(data => {
            onHide()
            //fetchDevices().then(data => device.setDevices(data))
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* {device.devices.map(oneDevice => <div>{oneDevice.id} - {oneDevice.name} - {oneDevice.price}</div>)} */}
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedDevice.id || "Select device..."}</Dropdown.Toggle>
                        <Dropdown.Menu style={{height:'200px', overflowY: 'auto'}}>
                            {device.devices.map(oneDevice =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedDevice(oneDevice)}
                                    key={oneDevice.id}
                                >
                                    {oneDevice.id} - {oneDevice.name} - {oneDevice.price}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={removeDevice}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteDevice;
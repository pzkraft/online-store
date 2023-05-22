import React, {useContext, useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown} from "react-bootstrap";
import {Context} from "../../index";
import { observer } from 'mobx-react-lite';
import {deleteType, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";

const DeleteType = observer(({show, onHide}) => {
    const {device} = useContext(Context)

    const removeType = () => {
        deleteType(device.selectedType.name).then(data => {
            onHide()
            fetchTypes().then(data => device.setTypes(data))
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
                    Delete type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedType.name || "Select type..."}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={removeType}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteType;

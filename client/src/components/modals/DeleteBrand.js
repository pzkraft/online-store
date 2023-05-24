import React, {useContext} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown} from "react-bootstrap";
import {Context} from "../../index";
import { observer } from 'mobx-react-lite';
import {deleteBrand, fetchBrands} from "../../http/brandAPI";

const DeleteBrand = observer(({show, onHide}) => {
    const {device} = useContext(Context)

    const removeBrand = () => {
        deleteBrand(device.selectedBrand.name).then(data => {
            onHide()
            fetchBrands().then(data => device.setBrands(data))
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
                    Delete brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedBrand.name || "Select brand..."}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={removeBrand}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteBrand;

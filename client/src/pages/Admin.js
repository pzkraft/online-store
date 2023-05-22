import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import DeleteType from '../components/modals/DeleteType';
import DeleteBrand from '../components/modals/DeleteBrand';
import { observer } from 'mobx-react-lite';
import DeleteDevice from '../components/modals/DeleteDevice';

const Admin = observer(() => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [deleteBrandVisible, setDeleteBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deleteTypeVisible, setDeleteTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [deleteDeviceVisible, setDeleteDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteTypeVisible(true)}
            >
                Delete type
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteBrandVisible(true)}
            >
                Delete brand
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteDeviceVisible(true)}
            >
                Delete device
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <DeleteType show={deleteTypeVisible} onHide={() => setDeleteTypeVisible(false)}/>
            <DeleteBrand show={deleteBrandVisible} onHide={() => setDeleteBrandVisible(false)}/>
            <DeleteDevice show={deleteDeviceVisible} onHide={() => setDeleteDeviceVisible(false)}/>

        </Container>
    );
});

export default Admin;

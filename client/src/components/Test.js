import React, { useContext } from 'react';
import { Context } from '../index';
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = () => {
    const {device} = useContext(Context)
    device.brandId = 2
    return (
        <ListGroup>
        {device.brands.map(ggg =>
            <ListGroup.Item
                style={{cursor: 'pointer'}}
                active={ggg.id === device.brandId}
                onClick={() => device.setSelectedBrand(ggg)}
                key={ggg.id}
            >
                {ggg.id}. {ggg.name}
            </ListGroup.Item>
        )}
    </ListGroup>
    );
};

export default TypeBar;
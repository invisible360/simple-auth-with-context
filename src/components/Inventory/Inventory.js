import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContecxt';

const Inventory = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h2>This is Inventory {user?.email}</h2>
        </div>
    );
};

export default Inventory;
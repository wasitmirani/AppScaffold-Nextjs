import Breadcrumb from "../../../components/Breadcrumb";
import React from 'react';
import UserTable from "./partials/UserTable";
const UserPage: React.FC = () => {
    return (

        <>     
                <Breadcrumb items={[{ label: 'Settings', link: '/' }, { label: 'Users' }]} current="Users" />
        </>
    );

};



export default UserPage;
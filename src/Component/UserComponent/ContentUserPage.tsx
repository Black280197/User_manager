import { FormCreateUser } from "./FormCreateUser"
import { ListUsers } from "./ListUsers"
import React, { useState } from "react"

export interface User {
    name: string;
    phoneNumber: string;
}

export const ContentUserPage: React.FC = () => { 
    const [listUsers, setListUsers] = useState<User[]>([
        {
            name: "Hoàng Văn Thái",
            phoneNumber: "0123456789"
    },
    {
        name: "Trịnh Ngọc Tú",
        phoneNumber: "099887766"
    }
    ])

    const addUser = (user: User) => {
        const newListUsers = [...listUsers, user];
        setListUsers(newListUsers);
    } 

    return (
        <div className="w-full">
            <FormCreateUser addUser={addUser}/>
            <ListUsers listUsers={listUsers}/>
        </div>
    )
}
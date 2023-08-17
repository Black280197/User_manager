import { FormCreateUser } from "./FormCreateUser";
import { ListUsers } from "./ListUsers";
import React, { useState } from "react";

interface RoleOfStaff {
  stt: number;
  role: string;
  workAddress: string;
}

export interface User {
  name: string;
  email: string;
  phoneNumber: string;
  userName: string;
  roleOfStaff: RoleOfStaff[];
  department: string;
  position: string;
  directManager: string;
  birthday: Date | null;
  sex: string;
  language: string;
}

export const ContentUserPage: React.FC = () => {
  const [listUsers, setListUsers] = useState<User[]>([
    {
      name: "Hoàng Hoa Thám",
      email: "HHH@gmail.com",
      phoneNumber: "0123456789",
      userName: "ThamHandsome",
      roleOfStaff: [
        {
          stt: 1,
          role: "Quản lý Sale",
          workAddress: "38 Hoàng Công Chất, TP Hà Nội",
        },
      ],
      department: "Sale",
      position: "Quản lý",
      directManager: "SM Lô Nhô",
      birthday: new Date("1990-12-25"),
      sex: "male",
      language: "VN",
    },
    {
      name: "Hoàng Hoa Thám",
      email: "HHH@gmail.com",
      phoneNumber: "0123456789",
      userName: "ThamHandsome",
      roleOfStaff: [
        {
          stt: 1,
          role: "Quản lý Sale",
          workAddress: "38 Hoàng Công Chất, TP Hà Nội",
        },
      ],
      department: "Sale",
      position: "Quản lý",
      directManager: "SM Lô Nhô",
      birthday: new Date("1990-12-25"),
      sex: "male",
      language: "VN",
    },
    {
      name: "Hoàng Hoa Thám",
      email: "HHH@gmail.com",
      phoneNumber: "0123456789",
      userName: "ThamHandsome",
      roleOfStaff: [
        {
          stt: 1,
          role: "Quản lý Sale",
          workAddress: "38 Hoàng Công Chất, TP Hà Nội",
        },
      ],
      department: "Sale",
      position: "Quản lý",
      directManager: "SM Lô Nhô",
      birthday: new Date("1990-12-25"),
      sex: "male",
      language: "VN",
    },
  ]);

  const addUser = (user: User) => {
    const newListUsers = [...listUsers, user];
    setListUsers(newListUsers);
  };

  return (
    <div className="w-full">
      <FormCreateUser addUser={addUser} />
      <ListUsers listUsers={listUsers} />
    </div>
  );
};

import React, { useState } from "react";
import { User } from "./ContentUserPage";

interface FormCreateUserProps {
  addUser: (user: User) => void;
}

export const FormCreateUser: React.FC<FormCreateUserProps> = ({ addUser }) => {
  const [showFormToAddUser, setShowFormToAddUser] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [stt, setStt] = useState<number>(1);
  const [role, setRole] = useState<string>("");
  const [workAddress, setWorkAddress] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [directManager, setDirectManager] = useState<string>("");
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [sex, setSex] = useState<string>("male");
  const [language, setLanguage] = useState<string>("VN");
  const [status, setStatus] = useState<string>("active");

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePhoneNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleChangeStt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStt(parseInt(event.target.value));
  };

  const handleChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  const handleChangeWorkAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWorkAddress(event.target.value);
  };

  const handleChangeDepartment = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDepartment(event.target.value);
  };

  const handleChangePosition = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(event.target.value);
  };

  const handleChangeDirectManager = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDirectManager(event.target.value);
  };

  const handleChangeBirthday = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectDate = new Date(event.target.value);
    setBirthday(selectDate);
  };

  const handleChangeSex = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSex(event.target.value);
  };

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setUserName("");
    setStt(1);
    setRole("");
    setWorkAddress("");
    setDepartment("");
    setPosition("");
    setDirectManager("");
    setBirthday(null);
    setSex("male");
    setLanguage("VN");
    setStatus("active");
  };

  const handleAddUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    addUser({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      userName: userName,
      roleOfStaff: [
        {
          stt: stt,
          role: role,
          workAddress: workAddress,
        },
      ],
      department: department,
      position: position,
      directManager: directManager,
      birthday: birthday,
      sex: sex,
      language: language,
    });
    handleShowFormToAddUser();
  };

  const handleShowFormToAddUser = () => {
    resetForm();
    setShowFormToAddUser(!showFormToAddUser);
  };

  return (
    <div className="flex-col w-full">
      <form className="w-full" action="#">
        {/* Phần tiêu đề và nút bấm khi thêm nhân viên */}
        <div className="bg-blue-100 pl-[10px]">
          Nhân viên/Danh sách nhân viên
        </div>
        <div className="p-[5px] flex justify-center items-center border border-black-800 font-bold">
          <div className="mr-auto">Thêm mới nhân viên</div>
          {!showFormToAddUser && (
            <button
              onClick={handleShowFormToAddUser}
              className=" text-blue-500 bg-white border border-blue-500 rounded-sm p-[10px] pt-[3px] pb-[3px]"
              type="button"
            >
              + Thêm mới
            </button>
          )}
        </div>
        {/* Phần form để thêm mới nhân viên */}
        {showFormToAddUser && (
          <div className="flex">
            {/* Avatar và trạng thái hoạt động */}
            <div className="avatar-status flex-col justify-center items-center w-[300px] mt-[20px]">
              <img
                className="w-[100px] h-[100px] rounded-full m-auto"
                src="https://i.pinimg.com/236x/11/a5/b7/11a5b7354473dd955ca4bbd4452d9e40.jpg"
                alt="avatar"
              />
              <div className="flex justify-center">
                <div className="mr-[8px]">Trạng thái:</div>
                <input
                  onChange={handleChangeStatus}
                  id="block"
                  className="mr-[3px]"
                  type="radio"
                  name="status"
                  value="block"
                  checked={"block" === status}
                />
                <label className="mr-[8px]" htmlFor="block">
                  Khóa
                </label>
                <input
                  onChange={handleChangeStatus}
                  id="active"
                  className="mr-[3px]"
                  type="radio"
                  name="status"
                  value="active"
                  checked={"active" === status}
                />
                <label htmlFor="active">Hoạt động</label>
              </div>
            </div>
            {/* Phần form điền thông tin user */}
            <div className="form-add-user w-3/6">
              {/* Thông tin liên hệ */}
              <div className="border-b-4 w-full p-[12px]">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="w-[125px]">
                        <div className="font-bold text-right w-full">
                          Họ và tên:
                        </div>
                      </th>
                      <td>
                        <input
                          className="ml-[5px] border border-blue-300 rounded-md w-full"
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleChangeName}
                        />
                      </td>
                    </tr>
                  </thead>
                  <tr>
                    <td>
                      <div className="text-right">Email:</div>
                    </td>
                    <td>
                      <input
                        className="ml-[5px] border border-blue-300 rounded-md w-full"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChangeEmail}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="text-right">Điện thoại:</div>
                    </td>
                    <td>
                      <input
                        className="ml-[5px] border border-blue-300 rounded-md w-full"
                        type="number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleChangePhoneNumber}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="text-right">Tên đăng nhập:</div>
                    </td>
                    <td>
                      <input
                        className="ml-[5px] border border-blue-300 rounded-md w-full"
                        type="text"
                        name="useName"
                        value={userName}
                        onChange={handleChangeUserName}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex w-full mt-2">
                        <img
                          className="w-[15px] h-[15px] mt-auto mb-auto"
                          src="./icon/synchronize.png"
                          alt=""
                        />
                        <a
                          className="text-[14px] text-blue-500 underline underline-offset-2"
                          href="#"
                        >
                          Đặt lại mật khẩu
                        </a>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                </table>
              </div>
              {/* Thông tin về vai trò và địa điểm làm việc */}
              <div className="border-b-4 w-full p-[12px] pl-0 pr-0">
                <div>Vai trò nhân viên:</div>
                <table className="w-full border-collapse">
                  <tr className="m-[3px] bg-blue-100">
                    <th className="w-[60px] text-center">STT</th>
                    <th className="text-left w-1/3">
                      <div>Vai trò</div>
                    </th>
                    <th className="text-left">
                      <div>Địa điểm làm việc</div>
                    </th>
                  </tr>
                  <tr>
                    <td className="text-center border border-slate-300">
                      <input
                        className="w-[50px] text-center pr-[5px]"
                        type="number"
                        name="stt"
                        value={stt}
                        onChange={handleChangeStt}
                      />
                    </td>
                    <td className="border border-slate-300">
                      <input
                        className="w-full pr-[15px] "
                        type="text"
                        name="role"
                        value={role}
                        onChange={handleChangeRole}
                      />
                    </td>
                    <td className="border border-slate-300">
                      <input
                        className="w-full pr-[5px]"
                        type="text"
                        name="workAddress"
                        value={workAddress}
                        onChange={handleChangeWorkAddress}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="flex w-full mt-2 items-center">
                        <div className="text-[20px] text-blue-500 text-center">
                          {" "}
                          +{" "}
                        </div>
                        <button className="text-[14px] text-blue-500 underline underline-offset-2">
                          Thêm địa điểm
                        </button>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              {/* Thông tin chi tiết nhân viên */}
              <div>Thông tin chi tiết nhân viên:</div>
              <div className="flex w-full mt-2 items-center">
                <button className="text-[14px] text-blue-500 underline underline-offset-2">
                  Ẩn chi tiết
                </button>
              </div>
              <table className="w-full">
                <tr>
                  <td className="w-[125px] text-right">Phòng ban:</td>
                  <td>
                    <input
                      className="ml-[5px] border border-blue-300 rounded-md w-full"
                      type="text"
                      name="department"
                      value={department}
                      onChange={handleChangeDepartment}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-[125px] text-right">Chức vụ:</td>
                  <td>
                    <input
                      className="ml-[5px] border border-blue-300 rounded-md w-full"
                      type="text"
                      name="position"
                      value={position}
                      onChange={handleChangePosition}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="qly">Quản lý trực tiếp:</label>
                  </td>
                  <td>
                    <input
                      className="ml-[5px] border border-blue-300 rounded-md w-full"
                      type="text"
                      name="directManager"
                      value={directManager}
                      onChange={handleChangeDirectManager}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-[125px] text-right">Ngày sinh:</td>
                  <td>
                    <input
                      className="ml-[5px] border border-blue-300 rounded-md w-full"
                      type="date"
                      name="birthday"
                      value={
                        birthday ? birthday.toISOString().split("T")[0] : ""
                      }
                      onChange={handleChangeBirthday}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-[125px] text-right">Giới tính:</td>
                  <td>
                    <input
                      id="sex"
                      className="ml-[5px]"
                      type="radio"
                      name="sex"
                      value="female"
                      checked={"female" === sex}
                      onChange={handleChangeSex}
                    />
                    <label className="ml-[3px]" htmlFor="sex">
                      Nữ
                    </label>
                    <input
                      id="sex"
                      className="ml-[5px]"
                      type="radio"
                      name="sex"
                      value="male"
                      checked={"male" === sex}
                      onChange={handleChangeSex}
                    />
                    <label className="ml-[3px]" htmlFor="sex">
                      Nam
                    </label>
                    <input
                      id="sex"
                      className="ml-[5px]"
                      type="radio"
                      name="sex"
                      value="other"
                      checked={"other" === sex}
                      onChange={handleChangeSex}
                    />
                    <label className="ml-[3px]" htmlFor="sex">
                      Khác
                    </label>
                  </td>
                </tr>
                <tr>
                  <td className="w-[125px] text-right">Ngôn ngữ:</td>
                  <td className="flex">
                    <input
                      id="language"
                      className="ml-[5px]"
                      type="radio"
                      name="language"
                      value="VN"
                      checked={"VN" === language}
                      onChange={handleChangeLanguage}
                    />
                    <label className="ml-[3px] flex" htmlFor="language">
                      <img
                        className="w-[20px] h-[20px] mt-auto mb-auto"
                        src="./icon/viet-nam.png"
                        alt=""
                      />
                      Tiếng Việt
                    </label>
                    <input
                      id="language"
                      className="ml-[5px]"
                      type="radio"
                      name="language"
                      value="JP"
                      checked={"JP" === language}
                      onChange={handleChangeLanguage}
                    />
                    <label className="ml-[3px] flex" htmlFor="language">
                      <img
                        className="w-[20px] h-[20px] mt-auto mb-auto"
                        src="./icon/japan.png"
                        alt=""
                      />
                      Tiếng Nhật
                    </label>
                    <input
                      id="language"
                      className="ml-[5px]"
                      type="radio"
                      name="language"
                      value="Other"
                      checked={"Other" === language}
                      onChange={handleChangeLanguage}
                    />
                    <label className="ml-[3px]" htmlFor="language">
                      Khác
                    </label>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        )}
      </form>
      {showFormToAddUser && (
        <div className="p-[5px] flex justify-center items-center border border-black-800 font-bold">
          <button
            onClick={handleShowFormToAddUser}
            className=" ml-auto bg-white border p-[10px] pt-[3px] pb-[3px]"
            type="button"
          >
            Hủy bỏ
          </button>
          <button
            onClick={handleAddUser}
            className="text-red-500 w-[76px] ml-10 bg-white border p-[10px] pt-[3px] pb-[3px]"
            type="button"
          >
            Lưu
          </button>
        </div>
      )}
    </div>
  );
};

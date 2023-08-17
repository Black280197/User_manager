interface listUsersProps {
  listUsers: { name: string; phoneNumber: string }[];
}

export const ListUsers = ({ listUsers }: listUsersProps) => {
  return (
    <div>
      {/* Thanh tìm kiếm */}
      <div className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className="mr-3 flex-none"
        >
          <path
            d="m19 19-3.5-3.5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <circle
            cx="11"
            cy="11"
            r="6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></circle>
        </svg>
        <input className="w-full" type="text" placeholder="Tìm kiếm" />
        <button className="ml-auto pl-3 flex-none text-black font-semibold">
          Sắp xếp theo tên A - Z
        </button>
      </div>
      {/* Thanh Trạng thái */}
      <div className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
        <div className="w-[100px]">Trạng thái:</div>
        <button className="bg-gray-300 text-center pl-2 pr-2 rounded-full flex-none text-black font-semibold">
          Hoạt động
        </button>
        <button className="bg-gray-300 text-center pl-2 pr-2 rounded-full flex-none text-black font-semibold ml-2">
          Ngừng hoạt động
        </button>
      </div>
      {/* Thông báo về số tài khoản */}
      <div className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
        <div className="w-1/4">Có tất cả 285 tài khoản nhân viên</div>
        <div className="ml-auto w-1/5 text-right pr-3">
          1-10 của 285 tài khoản
        </div>
        <button className="bg-gray-300 text-center pl-2 pr-2 rounded-full flex-none text-black font-semibold">
          {"<"}
        </button>
        <button className="bg-gray-300 text-center pl-2 pr-2 rounded-full flex-none text-black font-semibold ml-2">
          {">"}
        </button>
      </div>
      {/* Danh sách Users */}
      <div className="w-full flex align-middle justify-left">
        <div className="border border-gray-400 w-full">
          {listUsers.map((user, index) => (
            <div
              key={index}
              className="flex border-b-4 items-center p-2 justify-between"
            >
              {/* avatar */}
              <div>
                <img
                  className="w-[50px] round-full"
                  src="./icon/viet-nam.png"
                  alt=""
                />
              </div>
              {/* info */}
              <div className="flex-col w-1/2">
                <div className="text-[20px] font-bold">
                  Đặng Thị Chinh<span className="text-[15px]">(Chinhdt)</span>
                </div>
                <div className="flex justify-left">
                  <img
                    className="w-[20px] h-full"
                    src="./icon/phoneCall.png"
                    alt="phone_icon"
                  />
                  <div className="text-left pl-2">0122351515</div>
                  <img
                    className="w-[20px] h-full ml-2"
                    src="./icon/mail.png"
                    alt="mail_icon"
                  />
                  <div className="text-left pl-3">chinhdt@ows.com.vn</div>
                  <img
                    className="w-[20px] h-full ml-3"
                    src="./icon/user.png"
                    alt="people_icon"
                  />
                  <div className="text-left pl-2">Nhân viên Sale</div>
                </div>
              </div>
              {/* quan ly */}
              <div className="flex-col w-1/3 justify-center">
                <div className="text-center">Người quản lý</div>
                <div className="text-center font-bold">SM Nghĩa Trần</div>
              </div>
              {/* toggle */}
              <div className="ml-auto mr-20">
                <div className="flex items-center">
                  <div className="relative">
                    <input id="toggle" type="checkbox" className="sr-only" />
                    <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                  </div>
                </div>
              </div>
              {/* recycle bin */}
              <div className="flex items-center">
                <img
                  className="w-[25px] round-full"
                  src="./icon/recycle-bin.png"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

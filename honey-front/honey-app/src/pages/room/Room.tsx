import { Pen } from "@assets/images";
import Modal from "@components/common/modal";
import { Outlet } from "react-router-dom";

function Room() {
  return (
    <div className="w-full h-full px-[30px] pt-[30px] pb-[100px]">
      <div className="w-full h-full rounded-[30px] bg-cg-6">
        <div className="pt-[10px] w-full h-full flex flex-col justify-between">
          <div className="w-full h-[75%] z-[30]">
            <Outlet />
          </div>
          <div className="w-full h-[15%] flex flex-row items-center justify-evenly z-[30]">
            <button
              type="button"
              className="w-[30%] h-[45px] bg-cg-1 text-[24px] rounded-[60px] text-center"
            >
              만들기
            </button>
            <button
              type="button"
              className="w-[30%] h-[45px] bg-cg-1 text-[24px] rounded-[60px]"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
      <Modal
        className="relative bottom-[15%] left-[0%] w-[30%] h-[25%] z-[20]"
        overlay={false}
        openModal
      >
        <img src={Pen} className="w-full h-full" alt="펜" />
      </Modal>
    </div>
  );
}
export default Room;

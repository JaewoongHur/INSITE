import { Modal } from "@components/common/modal";
import { useState, useEffect } from "react";
import useRouter from "@hooks/useRouter";
import CustomCalendar from "@components/common/calendar";
import moment from "moment";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
function CreateRoom() {
  const { routeTo } = useRouter();
  const [roomName, setRoomName] = useState<string>("");
  const [today, setToday] = useState<Date>(new Date());
  const [releaseDate, setReleaseDate] = useState<string>("날짜 설정");
  const [boxChecked, setBoxChecked] = useState<boolean>(false);
  const [openCalendar, setOpenCalendar] = useState<boolean>(false);
  const [roomNameFocused, setRoomNameFocused] = useState<boolean>(false);
  const [roomPassword, setRoomPassword] = useState<string>("");
  const [roomPasswordFocused, setRoomPasswordFocused] =
    useState<boolean>(false);

  useEffect(() => {
    setToday(new Date());
  }, []);

  const handleInputFocus = () => {
    setRoomNameFocused(true);
  };

  const handleInputBlur = () => {
    if (!roomName.trim()) {
      setRoomNameFocused(false);
    }
  };
  const handleRoomPasswordFocus = () => {
    setRoomPasswordFocused(true);
  };

  const handleRoomPasswordBlur = () => {
    if (!roomPassword.trim()) {
      setRoomPasswordFocused(false);
    }
  };
  const handleRoomName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };
  const handleRoomPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const newPassword = password.replace(/\s/g, "");
    setRoomPassword(newPassword);
  };

  const handleCheckboxToggle = () => {
    setBoxChecked(!boxChecked);
    setRoomPasswordFocused(false);
  };

  const compareDate = (value: Value): boolean => {
    const nextDate = moment().add(1, "days").startOf("day");
    if (!(value instanceof Date) || value === null) {
      return false;
    }

    const selectedDate = moment(value);

    if (selectedDate.isBefore(nextDate)) {
      return true;
    }
    return false;
  };
  const handleDateChange = (
    value: Value,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (compareDate(value)) {
      alert("종료일은 오늘 이후의 날짜만 선택할 수 있습니다.");
    } else {
      const eventTarget = event.target as HTMLElement;
      const aria = eventTarget.getAttribute("aria-label");
      if (aria === null) {
        setReleaseDate("날짜 설정");
        return;
      }
      setReleaseDate(aria);
    }
  };
  const handleCalendar = () => {
    setOpenCalendar((prev) => !prev);
  };

  const submitCreateRoom = () => {
    const newRoomName = roomName.replace(/^\s+|\s+$|\n/g, "");
    setRoomName(newRoomName);
    if (newRoomName.trim() === "") {
      alert("방제목을 입력하세요.");
      return;
    }
    if (releaseDate === null || releaseDate === "날짜 설정") {
      alert("날짜를 설정해주세요.");
    }
    if (newRoomName.trim().length >= 50) {
      alert("방제목은 50자 이하로 작성되어야합니다.");
      return;
    }

    if (boxChecked) {
      const password = roomPassword;
      const passwordPattern = /^[A-Za-z0-9@$!%*?&]{8,16}$/;
      if (passwordPattern.test(password)) {
        setRoomPassword(password);
      } else {
        if (password === null || password === "") {
          alert("비밀번호를 설정해주세요.");
          return;
        }
        alert(
          "8자 이상 16자 이하의 영문 대소문자, 숫자, 특수문자를 입력해야 합니다.",
        );
      }
    }
  };
  return (
    <>
      <div className="text-[30px] text-white">방 만들기</div>
      <div className="w-full h-full px-[30px]">
        <div className="w-full h-full rounded-[30px] bg-cg-7 flex flex-col items-center justify-around pb-[50px]">
          <div className="pt-[20px] pb-[8px] text-[30px] text-white">
            방제목
          </div>
          <input
            value={roomName}
            placeholder={roomNameFocused ? "" : "방제목을 입력해주세요."}
            className="w-[90%] h-[10%] min-h-[50px] text-[18px] bg-cg-2 rounded-2xl"
            onChange={handleRoomName}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <div className="pt-[20px] pb-[8px] text-[30px] text-white">
            공개일
          </div>
          <div className="w-[100%]" onClick={handleCalendar} aria-hidden>
            <input
              value={releaseDate}
              className="w-[90%] h-[10%] min-h-[50px] text-[18px] bg-cg-2 rounded-2xl"
              readOnly
            />
          </div>
          <div className="w-[100%] flex flex-row items-center justify-center">
            <div
              className="pt-[20px] pb-[8px] pr-[15px] text-[28px] text-white cursor-pointer"
              onClick={handleCheckboxToggle}
              aria-hidden
            >
              암호 사용
            </div>
            <div className="flex items-center pt-[20px] pb-[10px]">
              <input
                type="checkbox"
                checked={boxChecked}
                onChange={handleCheckboxToggle}
                className="w-0 h-0 opacity-0 absolute"
                id="passwordCheckbox"
              />
              <label
                htmlFor="passwordCheckbox"
                className={`w-[35px] h-[35px] border-[5px] border-white relative rounded-sm cursor-pointer ${
                  boxChecked ? "bg-white" : "bg-cg-7"
                }`}
              >
                <span
                  className={`block w-[24px] h-[14px] border-t-[5px] border-r-[5px] transform rotate-[135deg] absolute top-[40%] left-[53%] -translate-x-[50%] -translate-y-[50%] ${
                    boxChecked ? "border-cg-7" : "border-transparent"
                  }`}
                />
              </label>
            </div>
          </div>
          <input
            type="password"
            value={roomPassword}
            placeholder={
              boxChecked && !roomPasswordFocused
                ? "비밀번호를 설정해주세요."
                : ""
            }
            className={
              boxChecked
                ? "w-[90%] h-[10%] min-h-[50px] text-[18px] bg-cg-2 rounded-2xl"
                : "w-[90%] h-[10%] min-h-[50px] text-[18px] bg-transparent text-transparent"
            }
            disabled={!boxChecked}
            onFocus={handleRoomPasswordFocus}
            onBlur={handleRoomPasswordBlur}
            onChange={handleRoomPassword}
          />
        </div>
      </div>
      <div className="w-full h-[15%] pt-[20px] flex flex-row items-center justify-evenly z-[20]">
        <button
          type="button"
          className="w-[30%] h-[45px] bg-cg-1 text-[24px] rounded-[60px] text-center"
          onClick={submitCreateRoom}
        >
          만들기
        </button>
        <button
          type="button"
          className="w-[30%] h-[45px] bg-cg-1 text-[24px] rounded-[60px]"
          onClick={() => routeTo("/")}
        >
          닫기
        </button>
      </div>
      {openCalendar && (
        <Modal
          className="fixed w-[320px] h-[320px] bottom-[50%] left-[50%] -translate-x-[160px] translate-y-[100px] z-[150]"
          overlay
          openModal={openCalendar}
        >
          <CustomCalendar onChange={handleDateChange} value={today} />
          <div className="fixed w-[300px] h-[40px] bottom-1/2 left-1/2 -translate-x-[150px] translate-y-[260px] z-[120] flex flex-row items-center justify-around">
            <button
              type="button"
              className="w-[100px] h-[35px] rounded-[60px] bg-cg-2 flex items-center justify-center"
              onClick={handleCalendar}
            >
              설정
            </button>
            <button
              type="button"
              className="w-[100px] h-[35px] rounded-[60px] bg-cg-2 flex items-center justify-center"
              onClick={handleCalendar}
            >
              닫기
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
export default CreateRoom;

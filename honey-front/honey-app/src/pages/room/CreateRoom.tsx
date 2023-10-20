import { TextInput } from "@components/common/input";
import { useState } from "react";

function CreateRoom() {
  const [roomName, setRoomName] = useState<string>("");
  const [releaseDate, setReleaseDate] = useState<string>("");
  const handleCalendar = () => {
    setReleaseDate("2019.01.08");
  };

  return (
    <>
      <div className="text-[36px] text-white">방 만들기</div>
      <div className="w-full h-full px-[30px]">
        <div className="w-full h-full rounded-[30px] bg-cg-7 flex flex-col items-center justify-evenly">
          <div className="pt-[20px] text-[36px] text-white">방이름</div>
          <TextInput
            value={roomName}
            holder="방이름을 입력해주세요."
            className="w-[90%] h-[10%] bg-cg-2"
            readonly={false}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <div className="pt-[20px] text-[36px] text-white">공개일</div>
          <TextInput
            value={releaseDate}
            holder="달력"
            className="w-[90%] h-[10%] bg-cg-2"
            readonly
            onChange={handleCalendar}
          />
          <div className="pt-[20px] text-[36px] text-white">암호 사용</div>
        </div>
      </div>
    </>
  );
}
export default CreateRoom;

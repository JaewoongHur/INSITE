import { RoomType } from "@customtype/dataTypes";

interface DropdwonProps {
  items: RoomType[];
  className: string;
  onClick: (roomId: number) => void;
}

function Dropdown({ className, items, onClick }: DropdwonProps) {
  return (
    <div className="absolute flex flex-col sm:w-[30%] justify-center items-center bg-cg-1 rounded-xl sm:h-[250px]">
      {items.map((item, index) => (
        <div key={item.roomId}>
          <button
            type="button"
            className={className}
            onClick={() => onClick(item.roomId)}
          >
            <p className="sm:text-2xl p-2">{item.roomName}</p>
          </button>
          {index !== items.length - 1 && (
            <hr className="w-[90%] border border-black" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;

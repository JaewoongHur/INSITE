import { ImageButton, TextButton } from "@components/common/button";

type PageButtonType = {
  id: number;
  alt: string;
  onClick: () => void;
  image: string;
};

function PageMove() {
  const goToFirst = () => {};
  const goToBefore = () => {};
  const goToNext = () => {};
  const goToLast = () => {};
  const goToTargetPage = () => {};

  const one: string = "./src/assets/images/pagebutton1.png";
  const two: string = "./src/assets/images/pagebutton2.png";

  const pageButtons: PageButtonType[] = [
    { id: 1, alt: "처음", onClick: () => goToFirst, image: two },
    { id: 2, alt: "이전", onClick: () => goToBefore, image: one },
    { id: 3, alt: "다음", onClick: () => goToNext, image: one },
    { id: 4, alt: "마지막", onClick: () => goToLast, image: two },
  ];

  return (
    <div className="flex w-[90%] justify-center">
      {pageButtons.map((button) => (
        <div key={button.id} className="flex justify-center">
          <ImageButton
            key={button.id}
            image={button.image}
            alt={button.alt}
            className={
              button.id === 3 || button.id === 4
                ? "w-[30%] rotate-180"
                : "w-[30%]"
            }
            onClick={button.onClick}
          />
        </div>
      ))}
    </div>
  );
}

export default PageMove;

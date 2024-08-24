import { useState } from "react";
import * as S from "./style";

// react-icons
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Heart = ({ onHeartClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [activePizzaId] = useState(null);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onHeartClick(activePizzaId);
  };

  return (
    <S.HeartWrapper onClick={handleClick} className={isClicked ? "checked" : "icon"} >
      <S.Heart>
        {
          isClicked ? <FaHeart size={15} /> : <CiHeart size={20} />
        }
      </S.Heart>
    </S.HeartWrapper>
  );
};

export default Heart;
// styles
import * as S from "./style";

// images
import logo from "../../img/logo.svg"

export default function Index() {
  return (
    <>
      <S.HeroWrapper>
        <S.LogoWrapper>
          <img src={logo} alt="Logo La Pizza" draggable="false" />
        </S.LogoWrapper>
      </S.HeroWrapper>
    </>
  )
}

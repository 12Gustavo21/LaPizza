// images
import Landscape from "../../img/landscape.png";

// styles
import * as S from "./style";

export default function Index() {
  return (
    <>
      <S.AboutWrapper>
        <S.Container>
          <S.Landscape>
            <img src={Landscape} alt="A landscape of a pizzeria" />
          </S.Landscape>
          <S.Content>
            <h2>Sobre a La P
              <font color="#FFBD48">i</font>
              <font color="#FE4545">z</font>
              <font color="#60BB28">z</font>
              a
            </h2>
            <p>Bem-vindo ao &quot;La Pizza&quot;, o seu refúgio acolhedor para uma experiência de pizzaria autêntica. Em nosso pequeno oásis italiano, cada pedaço de pizza é uma obra-prima artesanal. Sinta-se em casa enquanto o aroma sedutor de massa fresca assa no forno, criando as pizzas mais deliciosas da cidade.</p>
            <button>Ler mais sobre</button>
          </S.Content>
        </S.Container>
      </S.AboutWrapper>
    </>
  )
}

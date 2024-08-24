// components
import Heart from "../../heart"

// style
import * as S from "./style"

// eslint-disable-next-line react/prop-types
export default function Index({ img, name, price, id }) {

  function handleHeartClick(id) {
    const pizzaContainer = document.querySelector(
      `.PizzaContainer[data-id="${id}"]`
    );
    if (pizzaContainer) {
      pizzaContainer.classList.toggle("active");
    }
  }

  return (
    <>
      <S.Card>
        <S.PizzaWrapper>
          <img src={img} alt={`${name} pizza`} />
        </S.PizzaWrapper>
        <S.HeartWrapper>
          <Heart onHeartClick={() => handleHeartClick(id)} />
        </S.HeartWrapper>
        <S.CardBody>
          <S.CardTitle>
            <h3>{name}</h3>
          </S.CardTitle>
          <S.CardDescription>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </S.CardDescription>
          <S.PizzaPrice>
            <p>
              R$ {price}
            </p>
          </S.PizzaPrice>
          <S.BuyNow>
            <button>Comprar agora</button>
          </S.BuyNow>
        </S.CardBody>
      </S.Card>
    </>
  )
}

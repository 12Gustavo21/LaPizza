// styles
import * as S from "./style";

// components
import Card from "./cards"

// images
import laCuma1 from "../../img/lacuma1.svg";
import laMenta from "../../img/lamenta.svg";
import laCuma2 from "../../img/lacuma2.svg";
import laToca from "../../img/latoca.svg"

export default function Index() {

  const pizzas = [{
    img: laCuma1,
    name: "La cuma",
    price: "29,90"
  }, {
    img: laMenta,
    name: "La Menta",
    price: "25,50"
  }, {
    img: laCuma2,
    name: "La cuma",
    price: "26,00"
  },
  {
    img: laToca,
    name: "La Toca",
    price: "23,80"
  }
  ];

  return (
    <>
      <S.MoreSalesWrapper>
        <S.MoreSlaesTitle>
          <h2>Mais vendidas</h2>
        </S.MoreSlaesTitle>
        <div>
          {pizzas.map((pizza, i) => (
            <Card
              key={i}
              img={pizza.img}
              name={pizza.name}
              price={pizza.price}
            />
          ))}
        </div>
      </S.MoreSalesWrapper>
    </>
  )
}

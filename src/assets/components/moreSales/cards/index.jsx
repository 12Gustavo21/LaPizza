// eslint-disable-next-line react/prop-types
export default function Index({ img, name, price }) {
  return (
    <>
      <article>
        <figure>
          <img src={img} alt={`${name} pizza`} />
        </figure>
        <div>
          <div>
            <h3>{name}</h3>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <p>
              R$ {price}
            </p>
          </div>
          <div>
            <button>Comprar agora</button>
          </div>
        </div>
      </article>
    </>
  )
}

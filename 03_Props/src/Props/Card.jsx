

function Card(props) {
    return (
        <div className="Cards">
            <img src=" {props.img}" alt="" />
            <h1>{props.name}</h1>
            <h3>Age:{props.age}</h3>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis esse, eum a deleniti optio harum necessitatibus quam aliquid</p>
        </div>

    )
}

export default Card

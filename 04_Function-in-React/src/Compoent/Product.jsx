

function Product() {
    function AddCart() {
        alert("Add To Cart")
    }
    return (
        <div>
            <div className="container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZzgV7iCqDoShrea5vj4Qk0eB13Xa5jYDS2FzJOWF5Q&s=10" alt="Headphone" />
                <h1>Headphone</h1>
                <h2>Rockerz 425</h2>
                <p>Best Gaming Headphones: Immersive Sound, Mic & Comfort</p>
                <button onClick={AddCart}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product

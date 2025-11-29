function Fruits(){
    const fruitArray = ["Mango", "Banana", "Apple", "Orange", "Pineapple"];

    return (
        <div>
            <h2>Fruits List</h2>
            <ul>
                {fruitArray.map((fruit, index) => (
                    <li>{index} - {fruit}</li>
                ))}
            </ul>
        </div>
    )
}

export default Fruits;
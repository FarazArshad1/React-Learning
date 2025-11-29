function DestructingProps({name="Guest", city= "Unknown", age=18}) {
    
    return (
        <h1>Hello, {name} city : {city} Age : {age}</h1>
    )
}

//  There is another way to destruct props
// function DestructingProps(props) {
//     const {name, city, age} = props;
//     return (
//         <h1>Hello, {name} city : {city} Age : {age}</h1>
//     )
// }


export default DestructingProps
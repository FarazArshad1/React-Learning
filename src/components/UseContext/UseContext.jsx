import { createContext, useContext } from "react";

const UserContext = createContext()

function Parent() {
    const user = { name: 'Alice', age: 30 }

    return (
        <UserContext.Provider value={user}>
            <Child />
        </UserContext.Provider>
    )
}


function Child() {
    const user = useContext(UserContext)
    return (
        <>
            <h1>Hello {user.name} </h1>
            <GrandChild />
        </>
    )

}

function GrandChild() {
    const user = useContext(UserContext)

    return (
        <div>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
        </div>
    )
}



export default Parent
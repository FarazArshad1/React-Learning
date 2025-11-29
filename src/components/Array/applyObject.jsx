function StudentDetail() {
    const user = {
        "name": "John Doe",
        "age": 25,
        "course": "ReactJS"
    }

    return (
        <>
            <div>
                <h2>Person Details</h2>
                <p>Name : {user.name} </p>
                <p>Age : {user.age} </p>
                <p>Course : {user.course}</p>
            </div>
        </>
    )

}

export default StudentDetail;
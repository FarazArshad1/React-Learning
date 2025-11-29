function ClassDetails() {
    const student = [
        {
            "name": "John Doe",
            "age": 25,
            "course": "ReactJS"
        },
        {
            "name": "Jeff Bar",
            "age": 24,
            "course": "Node JS"
        },
        {
            "name": "Hassan Khan",
            "age": 27,
            "course": "ReactJS"
        }
    ]

    return (
        <div>
            <h2>Person Details</h2>
            <ul>
                {student.map((user, index) => (
                    <li>{user.name} is {user.age} Old and taking {user.course} Course</li>
                ))}
            </ul>
        </div>
    )
}

export default ClassDetails;
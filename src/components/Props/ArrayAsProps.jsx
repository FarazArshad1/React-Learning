// Passing Array as Props to a Component

function Students(student) {

    return (
        <>
            <h1>Student Name: {student.name}</h1>
            <h2>Student Age: {student.age}</h2>
            <h2>Student City: {student.city}</h2>
            <ul>
                {student.subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                ))}
            </ul>
        </>
    )
}

export default Students
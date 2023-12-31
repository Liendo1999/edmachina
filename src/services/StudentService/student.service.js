import stuentsMock from './students-mock.json'

const StudentService = {
    getStudents: () => {
        return stuentsMock.students
    },
    // function to be used from useStudent to get a student by id
    getStudentById: (id) => {
        return stuentsMock.students.find((student) => student.id === id)
    },
}

export default StudentService

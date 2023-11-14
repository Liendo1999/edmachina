import {StudentService} from "../services/StudentService/student.service.js"
import {AdminModel, StudentModel} from "../domain/User.model.js";

export const useStudents =  {
    /**
     *
     * @return StudentModel[]
     */
    getStudents: () => {
        try {
            const response = StudentService.getStudents()

            if (response) {
                let students = response.map((student) => new StudentModel(student.id, student.name, student.email))
                console.log(response)
                return students
            }
        }
        catch (error) {
            console.log(error)
        }
    },

    //function to get a student by id
    getStudentById: (id) => {
        try {
            const response = StudentService.getStudentById(id)

            if (response) {
                let student = new StudentModel(response.id, response.name, response.email)
                console.log(response)
                return student
            }
        }
        catch (error) {
            console.log(error)
        }
    },
}

export const StudentService = {
    getStudents: async () => {
        const response = await fetch('http://localhost:3000/students');
        const students = await response.json();
        return students;
    }
}
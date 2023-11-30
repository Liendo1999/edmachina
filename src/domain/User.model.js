export class UserModel {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }

    get getId() {
        return this.id
    }
}

export class StudentModel extends UserModel {
    constructor(id, name, email) {
        super(id, name, email)
        this.materias = ["Algebra", "Calculo", "Fisica", "Quimica"]
    }

    set setMaterias(materias) {
        this.materias = materias
    }

    get getMaterias() {
        return this.materias
    }
}

export class AdminModel extends UserModel {

    constructor(id, name, email) {
        super(id, name, email)
        this.estudiantes = []
    }

    /**
     *
     * @param estudiantes {StudentModel[]}
     */
    set setEstudiantes(estudiantes) {
        this.estudiantes = estudiantes
    }

    get getEstudiantes() {
        return this.estudiantes
    }
}

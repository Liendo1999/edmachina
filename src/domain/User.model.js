export class UserModel {
  private id
  constructor (id, name, email) {
    this.id = id
    this.name = name
    this.email = email
  }
    get getId () {
      return this.id
    }
}

export class StudentModel extends UserModel {
  private materias = []
  constructor (id, name, email) {
    super(id, name, email)
  }
  set setMaterias (materias) {
    this.materias = materias
  }

  get getMaterias () {
    return this.materias
  }
}

export class AdminModel extends UserModel {
  private estudiantes:StudentModel = []
  constructor (id, name, email) {
    super(id, name, email)
  }
  set setEstudiantes (estudiantes:StudentModel[]) {
    this.estudiantes = estudiantes
  }
  get getEstudiantes () {
      return this.estudiantes
  }
}
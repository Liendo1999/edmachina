export class UserModel {
  constructor (id, name, email) {
    this.id = id
    this.name = name
    this.email = email
  }
}

export class StudentModel extends UserModel {
  constructor (id, name, email, studentId) {
    super(id, name, email)
    this.studentId = studentId
  }
}

export class AdminModel extends UserModel {
  constructor (id, name, email, adminId) {
    super(id, name, email)
    this.adminId = adminId
  }
}
module.exports = class UserDto {
    email
    id
    fio
    phone_number
    role

    constructor(model) {
        this.email = model.email
        this.id = model.id
        this.fio = model.fio
        this.phone_number = model.phone_number
        this.role = model.role
    }
}
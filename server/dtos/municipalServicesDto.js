module.exports = class municipalServicesDto {
    id
    name
    specification
    work_area
    email
    role

    constructor(model) {
        this.id = model.id
        this.name = model.name
        this.specification = model.specification
        this.work_area = model.work_area
        this.email = model.email
        this.role = model.role
    }
}
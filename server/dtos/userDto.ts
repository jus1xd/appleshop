export class UserDto {
    username;
    id;
    role

    constructor ( model ) {
        this.username = model.username
        this.id = model._id
        this.role = model.role
    }
}
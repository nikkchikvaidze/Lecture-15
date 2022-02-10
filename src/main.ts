interface User {
    id: string;
    name: string;
    age?: number;
    role: "admin" | "moderator" | "user";
    occupation?: string;
    }


//1)--------------------------------------------------------------------

type RequiredUsers = Required<User>;

//2)---------------------------------------------------------------------

type OmitUser = Omit<User, "age">;

//3)---------------------------------------------------------------------

type PartialUser = Partial<User>;

function updateUser(user:User, fieldsToUpdate:Partial<User>){
    return {...user, ...fieldsToUpdate};
}

//4)----------------------------------------------------------------------

type PickUser = Pick<User, "id" | "name">;

type ReadOnly = Readonly<PickUser>;

//5)-----------------------------------------------------------------------

type RoleUppercase = Uppercase<User["role"]>

let admin:RoleUppercase = "ADMIN";
let moderator:RoleUppercase = "MODERATOR";
let user:RoleUppercase = "USER";
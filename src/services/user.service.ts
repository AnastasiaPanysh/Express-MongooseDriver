import { getAllUsersDB, createUsersDB, getUserByIDDB, deleteUserDB, updateUserDB } from '../repositores/user.repository';

async function getAllUsers() {
    return await getAllUsersDB();
}

async function getUserByID(_id) {
    return await getUserByIDDB(_id)
}

async function createUsers(obj) {
    return await createUsersDB(obj)
}

async function deleteUser(_id) {
    return await deleteUserDB(_id)
}

async function updateUser(_id, obj) {
    return await updateUserDB(_id, obj)
}

export { getAllUsers, getUserByID, createUsers, deleteUser, updateUser };

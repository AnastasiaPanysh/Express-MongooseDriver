import { Collections, ObjectId } from '../db';

async function getAllUsersDB() {
    return await Collections.User.find();
}

async function getUserByIDDB(_id) {
    return await Collections.User.findOne({ _id: new ObjectId(_id) });
}

async function createUsersDB(obj) {
    await Collections.User.collection.insertOne(obj)
    return 'success'
}

async function deleteUserDB(_id) {
    await Collections.User.collection.deleteOne({ _id: new ObjectId(_id) });
    return 'success'
}

async function updateUserDB(_id, obj) {
    await Collections.User.updateOne({ _id: new ObjectId(_id) }, obj);
    return 'success'
}



export { getAllUsersDB, getUserByIDDB, createUsersDB, deleteUserDB, updateUserDB };

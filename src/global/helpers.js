export const addUser = (users, userToAdd) => {
    const existingUser = users.find(x => x.id === userToAdd.id);
    if(existingUser){
        return [...users]
    }
    return [...users, userToAdd]
}

export const removeUser = (users, userToRemove) => {
    return users.filter(user => user.id !== userToRemove);
}

export const setAge = (users, userToUpdate) => {
    return users.map(user => user.id === userToUpdate.id ? {...user, age: userToUpdate.age } : user);
}

export const setName = (users, userToUpdate) => {
    return users.map(user => user.id === userToUpdate.id ? {...user, age: userToUpdate.age } : user);
}
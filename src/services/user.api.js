const url = 'http://localhost:5000/users'

const getUsers = () => {
    return fetch(url)
        .then(value => value.json())
};

const createUser = (user) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
};

const updateUser = (user, id) => {
    return fetch(url + '/' + id, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json());
};

const deleteUser = (id) => {
    return fetch(`${url}/${id}`, {
        method: 'DELETE',
    });
};

export {getUsers, createUser, updateUser, deleteUser};

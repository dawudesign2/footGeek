const db = require('../database');

const getUser = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users', (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};

const createUser = (user) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users SET ?', user, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const updateUser = (user) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE users SET ? WHERE id = ?', [user, user.id], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM users WHERE id = ?', id, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}
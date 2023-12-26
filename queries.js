const connection = require('./connection');

const viewDepartments = () => {
    connection.promise().query('SELECT * FROM department')
    .then(([rows]) => {
        console.table(rows);
    })
    .catch(err => console.error(err));

};

module.exports = {
    viewDepartments,
};
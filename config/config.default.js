'use strict';

exports.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  database: 'medical',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: '123456',
};
sequelize
  .authenticate()
  .then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
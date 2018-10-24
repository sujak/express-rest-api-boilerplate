const development = {
  database: 'rest',
  username: 'root',
  password: '123456',
  host: 'localhost',
  dialect: 'mysql',
};

const testing = {
  database: 'databasename',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'mysql',
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development,
  testing,
  production,
};

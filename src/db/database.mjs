import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const { PASSWORD, DATA_BASE } = process.env;

const db = new Sequelize(DATA_BASE, 'root', PASSWORD, {
  host: 'localhost',
  dialect:
    'mysql' /* | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

export default db
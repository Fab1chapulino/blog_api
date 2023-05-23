/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/dbConfig.interface';

dotenv.config();

const {
    DB_USER,
     DB_PASS,
     DB_HOST,
     DB_NAME,
     DB_PORT,
     DB_DIALECT,
     DB_NAME_DEVELOPMENT,
     DB_NAME_PRODUCTION,
     DB_NAME_TEST
    } = process.env;

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: DB_USER, //process.env.DB_USER,
        password: DB_PASS, //process.env.DB_PASS,
        database: DB_NAME_DEVELOPMENT, //process.env.DB_NAME_DEVELOPMENT,
        host: DB_HOST, //process.env.DB_HOST,
        port: DB_PORT, //process.env.DB_PORT,
        dialect: DB_DIALECT,//process.env.DB_DIALECT,
        urlDatabase: `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
    },
    test: {
        username: DB_USER, //process.env.DB_USER,
        password: DB_PASS, //process.env.DB_PASS,
        database: DB_NAME_TEST, //process.env.DB_NAME_DEVELOPMENT,
        host: DB_HOST, //process.env.DB_HOST,
        port: DB_PORT, //process.env.DB_PORT,
        dialect: DB_DIALECT,//process.env.DB_DIALECT,
        urlDatabase: `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
    },
    production: {
        username: DB_USER, //process.env.DB_USER,
        password: DB_PASS, //process.env.DB_PASS,
        database: DB_NAME_PRODUCTION, //process.env.DB_NAME_DEVELOPMENT,
        host: DB_HOST, //process.env.DB_HOST,
        port: DB_PORT, //process.env.DB_PORT,
        dialect: DB_DIALECT,//process.env.DB_DIALECT,
        urlDatabase: `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
    },
};
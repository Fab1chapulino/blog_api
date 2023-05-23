/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { User } from 'src/modules/users/user.entity';
import { databaseConfig } from './database.config';


dotenv.config();

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
         switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development.urlDatabase;
           break;
        case TEST:
           config = databaseConfig.test.urlDatabase;
           break;
        case PRODUCTION:
           config = databaseConfig.production.urlDatabase;
           break;
        default:
           config = databaseConfig.development.urlDatabase;
        } 
        const sequelize = new Sequelize(config);
        sequelize.addModels([User]);
        await sequelize.sync();
        return sequelize;
    },
}];
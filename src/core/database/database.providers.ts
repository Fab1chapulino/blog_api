/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../constants';
import { User } from 'src/modules/users/user.entity';


export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
     /*    switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        case TEST:
           config = databaseConfig.test;
           break;
        case PRODUCTION:
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        } */
        const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`);
        sequelize.addModels([User]);
        await sequelize.sync();
        return sequelize;
    },
}];
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('test', 'postgres', 'dvirbitan1234567', {
  host: 'localhost',
  dialect: 'postgres'
});

// connect to elephentQL:
  // export const sequelize = new Sequelize('postgres://uajketof:S8zG6KvQCHO8n5h6zMSlCqs0zYZPG83d@hansken.db.elephantsql.com/uajketof');


export const connectWithSequelize = async () => {
    try {
      await sequelize.authenticate({ logging: false });
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
};

import * as bcrypt from 'bcrypt';
import * as Sequelize from 'sequelize';
import {
    IBookAttribute, IBookInstance, ITradeAttributes, ITradeInstance, IUserAttributes, IUserInstance
} from '../Types/SequelizeTypes';

const NODE_TEST = (process.env.NODE_ENV === 'test');
const database: string = NODE_TEST ? 'test' : 'booktrading';
//const host: string = NODE_TEST ? 'postgres' : 'postgres';

const bookTradingConnection = new Sequelize(`${database}`, 'meeseeks', 'MEESEEKS', {
    host: 'sqldb',
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 0,
        idle: 1000
    },
    port: 5432,
    logging: false
});

const UserSequelize = bookTradingConnection.define<IUserInstance, IUserAttributes>('users', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    contact: {
        type: Sequelize.STRING
    }

}, {
    underscored: true,
    hooks: {
        beforeCreate: (user: IUserInstance, options: object) => {
            bcrypt.genSalt(10)
                .then((salt: string) => bcrypt.hash(user.password, salt))
                .then((result: string) => {
                    user.password = result;

                    return user;

                });
        },
        beforeUpdate: (user: IUserInstance, options?: object): Promise<IUserInstance> => {
            if (user.changed('password')) {
                return bcrypt.genSalt(10)
                    .then((salt: string) => bcrypt.hash(user.password, salt))
                    .then((result: string) => {
                        user.password = result;

                        return user;
                    });
            }

        }
    },
    instanceMethods: {
        verifyPassword: function (password: string): Promise<boolean> {
            const user: IUserInstance = this;

            return bcrypt.compare(password, user.password)
                .then((result: boolean) => result);
        }
    }
});

const BooksSequelize = bookTradingConnection.define<IBookInstance, IBookAttribute>('books', {
    id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    owner: {
        type: Sequelize.STRING
    }

}, {
    underscored: true
});

const TradeSequelize = bookTradingConnection.define<ITradeInstance, ITradeAttributes>('trades', {
    id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    accepted: {
        type: Sequelize.BOOLEAN,
        defaultValue: null
    },
    item_offered: {
        type: Sequelize.STRING,
        unique: true
    },
    item_wanted: {
        type: Sequelize.STRING,
        unique: true
    }
}, {
    underscored: true,
    hooks: {
        afterDelete: (instance, options, passedFunction) => {

        }
    },
    instanceMethods: {
        tradeResult: (accepted: boolean) => {
            const trade: ITradeInstance = this;
            if (accepted) {

            }

        }
    }
});

BooksSequelize.belongsTo(UserSequelize);
UserSequelize.hasMany(BooksSequelize);
if (!NODE_TEST) {
    console.log('******************DEVELOPMENT******************');
    bookTradingConnection.sync({force: true})
        .catch(e => console.log(e));
}

export {BooksSequelize, UserSequelize, bookTradingConnection, TradeSequelize};

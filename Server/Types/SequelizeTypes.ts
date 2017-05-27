import {Instance} from 'sequelize';

export interface IBookAttribute {
    id?: string;
    title?: string;
    owner?: string;
    description?: string;
    user_id?: string;
}

export interface IBookInstance extends Instance<IBookAttribute>, IBookAttribute {

}

export interface ITradeAttributes {
    id?: number;
    accepted?: boolean;
    item_wanted?: string;
    item_offered?: string;
}

export interface IUserAttributes {
    id?: string;
    userName?: string;
    password?: string;
    name?: string;
    city?: string;
    state?: string;
    contact?: string;
    books?: { dataValues: IBookAttribute[] };
}

export interface IUserInstance extends Instance<IUserAttributes>, IUserAttributes {
}

export interface ITradeInstance extends Instance<ITradeAttributes>, ITradeAttributes {
    tradeResult (accepted: boolean): ITradeAttributes;
}

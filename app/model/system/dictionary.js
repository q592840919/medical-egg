'use strict';
module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const InfoSchema = new Schema({
        id: INTEGER,
        name: STRING,
        value: STRING,
        type: INTEGER,
        sort: STRING
    });                                 //商户信息
    return mongoose.model('MarketCard', InfoSchema);
}
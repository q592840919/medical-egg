'use strict';
const Service = require('egg').Service;
class BaseService extends Service {
    async add(type, post) {
        const info = await this.ctx.model[type].Info.create(post);
        return {
            code: 20000,
            status: true,
            data: {data: info}
        }
    }

    async del(type, id) {
        const info = await this.ctx.model[type].Info.remove(id);
        return {
            code: 20000,
            status: true,
            data: {data: info}
        }
    }

    async edit(type, id, post) {
        const info = await this.ctx.model[type].Info.findByIdAndUpdate(id,post);
        return {
            code: 20000,
            status: true,
            data: info
        }
    }

    async query(type, id) {
        const info = await this.ctx.model[type].Info.findById(id);
        return {
            code: 20000,
            status: true,
            data: info
        }
    }
}
module.exports = BaseService;
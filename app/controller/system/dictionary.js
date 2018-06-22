'use strict';

const Controller = require('egg').Controller;

class dictionaryController extends Controller {
  async add() {
    const {
        ctx,
        service
    } = this;
    const dicInfo = ctx.request.body.dicInfo;
    const res = await service.system.dictionary.add('dictionary', id ,dicInfo); 
    ctx.body = res;
  }

  async del() {
    const {
        ctx,
        service
    } = this;
    let info = {_id: ctx.request.body.id};
    const res = await service.system.dictionary.remove('dictionary',id); 
    ctx.body = res;
  }

  async edit() {
    const {
        ctx,
        service
    } = this;
    const id = ctx.request.body.id;
    const dicInfo = ctx.request.body.dicInfo;
    const res = await service.system.dictionary.edit('dictionary', id ,dicInfo); 
    ctx.body = res;
  }

  async query() {
    const {
        ctx,
        service
    } = this;
    const id = ctx.request.body.id;
    const res = await service.system.dictionary.query('dictionary', id); 
    ctx.body = res;
  }
}

module.exports = dictionaryController;

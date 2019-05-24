'use strict';

/**
 * Userdetail.js controller
 *
 * @description: A set of functions called "actions" for managing `Userdetail`.
 */

module.exports = {

  /**
   * Retrieve userdetail records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.userdetail.search(ctx.query);
    } else {
      return strapi.services.userdetail.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a userdetail record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.userdetail.fetch(ctx.params);
  },

  /**
   * Count userdetail records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.userdetail.count(ctx.query, populate);
  },

  /**
   * Create a/an userdetail record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.userdetail.add(ctx.request.body);
  },

  /**
   * Update a/an userdetail record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.userdetail.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an userdetail record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.userdetail.remove(ctx.params);
  }
};

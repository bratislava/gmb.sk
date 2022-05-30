'use strict';

/**
 *  tag controller
 */

import { factories } from '@strapi/strapi';

module.exports = factories.createCoreController('api::tag.tag', ({strapi}) => ({
    async findOne(ctx) {
        const entity = await strapi.query('api::tag.tag').findOne(ctx.params);
        const sanitizedEntity = this.sanitizeOutput(entity);
        return this.transformResponse(sanitizedEntity);
    },
}))
  

// export default factories.createCoreController('api::tag.tag');

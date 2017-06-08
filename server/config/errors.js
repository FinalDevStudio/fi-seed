'use strict';

/**
 * fi-errors configuration
 */
module.exports = {

  /**
   * Application custom errors
   */
  errors: [{
    name: 'MongoDuplicatedError',
    message: 'This document is already registered.',
    code: 409
  }],

  /**
   * Application custom error handlers
   */
  handlers: {
    // Handle validations errors with BadRequestError
    'ValidationError': 'BadRequestError',

    // Handle errors with code 11000 with MongoDuplicatedError
    '11000': 'MongoDuplicatedError'
  }
};
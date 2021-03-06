/**
 * Bybit API
 * ## REST API for the Bybit Exchange. Base URI: [https://api.bybit.com]  
 *
 * OpenAPI spec version: 0.2.10
 * Contact: support@bybit.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BybitApi) {
      root.BybitApi = {};
    }
    root.BybitApi.LinearPositionsApi = factory(root.BybitApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * LinearPositions service.
   * @module api/LinearPositionsApi
   * @version 0.2.10
   */

  /**
   * Constructs a new LinearPositionsApi. 
   * @alias module:api/LinearPositionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the linearPositionsChangeMargin operation.
     * @callback module:api/LinearPositionsApi~linearPositionsChangeMarginCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add/Reduce Margin
     * This will Add/Reduce Margin
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol 
     * @param {String} opts.side 
     * @param {Number} opts.margin 
     * @param {module:api/LinearPositionsApi~linearPositionsChangeMarginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.linearPositionsChangeMargin = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'symbol': opts['symbol'],
        'side': opts['side'],
        'margin': opts['margin']
      };

      var authNames = ['apiKey', 'apiSignature', 'timestamp'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/private/linear/position/add-margin', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the linearPositionsClosePnlRecords operation.
     * @callback module:api/LinearPositionsApi~linearPositionsClosePnlRecordsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user&#39;s closed profit and loss records.
     * This will get user&#39;s closed profit and loss records.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol 
     * @param {Number} opts.startTime 
     * @param {Number} opts.endTime 
     * @param {String} opts.execType 
     * @param {Number} opts.page 
     * @param {Number} opts.limit 
     * @param {module:api/LinearPositionsApi~linearPositionsClosePnlRecordsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.linearPositionsClosePnlRecords = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'symbol': opts['symbol'],
        'start_time': opts['startTime'],
        'end_time': opts['endTime'],
        'exec_type': opts['execType'],
        'page': opts['page'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'apiSignature', 'timestamp'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/private/linear/trade/closed-pnl/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the linearPositionsMyPosition operation.
     * @callback module:api/LinearPositionsApi~linearPositionsMyPositionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get my position list.
     * This will get my position list.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol 
     * @param {module:api/LinearPositionsApi~linearPositionsMyPositionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.linearPositionsMyPosition = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'symbol': opts['symbol'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKey', 'apiSignature', 'timestamp'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/private/linear/position/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the linearPositionsSaveLeverage operation.
     * @callback module:api/LinearPositionsApi~linearPositionsSaveLeverageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set leverage
     * This will Set Leverage
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol 
     * @param {Number} opts.buyLeverage 
     * @param {Number} opts.sellLeverage 
     * @param {module:api/LinearPositionsApi~linearPositionsSaveLeverageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.linearPositionsSaveLeverage = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'symbol': opts['symbol'],
        'buy_leverage': opts['buyLeverage'],
        'sell_leverage': opts['sellLeverage']
      };

      var authNames = ['apiKey', 'apiSignature', 'timestamp'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/private/linear/position/set-leverage', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the linearPositionsSetAutoAddMargin operation.
     * @callback module:api/LinearPositionsApi~linearPositionsSetAutoAddMarginCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set auto add margin
     * This will Set auto add margin
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol 
     * @param {String} opts.side 
     * @param {Boolean} opts.autoAddMargin 
     * @param {module:api/LinearPositionsApi~linearPositionsSetAutoAddMarginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.linearPositionsSetAutoAddMargin = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'symbol': opts['symbol'],
        'side': opts['side'],
        'auto_add_margin': opts['autoAddMargin']
      };

      var authNames = ['apiKey', 'apiSignature', 'timestamp'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/private/linear/position/set-auto-add-margin', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the linearPositionsSwitchIsolated operation.
     * @callback module:api/LinearPositionsApi~linearPositionsSwitchIsolatedCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Switch isolated
     * This will switch isolated
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol 
     * @param {Boolean} opts.isIsolated 
     * @param {Number} opts.buyLeverage 
     * @param {Number} opts.sellLeverage 
     * @param {module:api/LinearPositionsApi~linearPositionsSwitchIsolatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.linearPositionsSwitchIsolated = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'symbol': opts['symbol'],
        'is_isolated': opts['isIsolated'],
        'buy_leverage': opts['buyLeverage'],
        'sell_leverage': opts['sellLeverage']
      };

      var authNames = ['apiKey', 'apiSignature', 'timestamp'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/private/linear/position/switch-isolated', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the linearPositionsSwitchMode operation.
     * @callback module:api/LinearPositionsApi~linearPositionsSwitchModeCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Switch Mode
     * This will Switch TP/SL Mode
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol 
     * @param {String} opts.tpSlMode 
     * @param {module:api/LinearPositionsApi~linearPositionsSwitchModeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.linearPositionsSwitchMode = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'symbol': opts['symbol'],
        'tp_sl_mode': opts['tpSlMode']
      };

      var authNames = ['apiKey', 'apiSignature', 'timestamp'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/private/linear/tpsl/switch-mode', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the linearPositionsTradingStop operation.
     * @callback module:api/LinearPositionsApi~linearPositionsTradingStopCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set tradingStop
     * This will set tradingStop
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol 
     * @param {String} opts.side 
     * @param {Number} opts.takeProfit 
     * @param {Number} opts.stopLoss 
     * @param {Number} opts.trailingStop 
     * @param {String} opts.tpTriggerBy 
     * @param {String} opts.slTriggerBy 
     * @param {Number} opts.slSize 
     * @param {Number} opts.tpSize 
     * @param {module:api/LinearPositionsApi~linearPositionsTradingStopCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.linearPositionsTradingStop = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'symbol': opts['symbol'],
        'side': opts['side'],
        'take_profit': opts['takeProfit'],
        'stop_loss': opts['stopLoss'],
        'trailing_stop': opts['trailingStop'],
        'tp_trigger_by': opts['tpTriggerBy'],
        'sl_trigger_by': opts['slTriggerBy'],
        'sl_size': opts['slSize'],
        'tp_size': opts['tpSize']
      };

      var authNames = ['apiKey', 'apiSignature', 'timestamp'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/private/linear/position/trading-stop', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

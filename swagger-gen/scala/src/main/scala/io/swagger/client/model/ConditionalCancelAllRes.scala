/**
 * Bybit API
 * ## REST API for the Bybit Exchange. Base URI: [https://api.bybit.com]  
 *
 * OpenAPI spec version: 0.2.10
 * Contact: support@bybit.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package io.swagger.client.model


case class ConditionalCancelAllRes (
  clOrdID: Option[String] = None,
  userId: Option[Number] = None,
  symbol: Option[String] = None,
  side: Option[String] = None,
  orderType: Option[String] = None,
  price: Option[String] = None,
  qty: Option[Number] = None,
  timeInForce: Option[String] = None,
  createType: Option[String] = None,
  cancelType: Option[String] = None,
  orderStatus: Option[String] = None,
  leavesQty: Option[Number] = None,
  leavesValue: Option[String] = None,
  crossSeq: Option[Number] = None,
  stopOrderType: Option[String] = None,
  triggerBy: Option[String] = None,
  createdAt: Option[String] = None,
  updatedAt: Option[String] = None
)


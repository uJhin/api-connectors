# coding: utf-8

"""
    Bybit API

    ## REST API for the Bybit Exchange. Base URI: [https://api.bybit.com]    # noqa: E501

    OpenAPI spec version: 0.2.11
    Contact: support@bybit.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class FundingPredicted(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'predicted_funding_rate': 'float',
        'predicted_funding_fee': 'float'
    }

    attribute_map = {
        'predicted_funding_rate': 'predicted_funding_rate',
        'predicted_funding_fee': 'predicted_funding_fee'
    }

    def __init__(self, predicted_funding_rate=None, predicted_funding_fee=None):  # noqa: E501
        """FundingPredicted - a model defined in Swagger"""  # noqa: E501

        self._predicted_funding_rate = None
        self._predicted_funding_fee = None
        self.discriminator = None

        if predicted_funding_rate is not None:
            self.predicted_funding_rate = predicted_funding_rate
        if predicted_funding_fee is not None:
            self.predicted_funding_fee = predicted_funding_fee

    @property
    def predicted_funding_rate(self):
        """Gets the predicted_funding_rate of this FundingPredicted.  # noqa: E501


        :return: The predicted_funding_rate of this FundingPredicted.  # noqa: E501
        :rtype: float
        """
        return self._predicted_funding_rate

    @predicted_funding_rate.setter
    def predicted_funding_rate(self, predicted_funding_rate):
        """Sets the predicted_funding_rate of this FundingPredicted.


        :param predicted_funding_rate: The predicted_funding_rate of this FundingPredicted.  # noqa: E501
        :type: float
        """

        self._predicted_funding_rate = predicted_funding_rate

    @property
    def predicted_funding_fee(self):
        """Gets the predicted_funding_fee of this FundingPredicted.  # noqa: E501


        :return: The predicted_funding_fee of this FundingPredicted.  # noqa: E501
        :rtype: float
        """
        return self._predicted_funding_fee

    @predicted_funding_fee.setter
    def predicted_funding_fee(self, predicted_funding_fee):
        """Sets the predicted_funding_fee of this FundingPredicted.


        :param predicted_funding_fee: The predicted_funding_fee of this FundingPredicted.  # noqa: E501
        :type: float
        """

        self._predicted_funding_fee = predicted_funding_fee

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(FundingPredicted, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, FundingPredicted):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other

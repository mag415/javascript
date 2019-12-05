"use strict";
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
*/
class V2beta1ObjectMetricStatus {
    static getAttributeTypeMap() {
        return V2beta1ObjectMetricStatus.attributeTypeMap;
    }
}
V2beta1ObjectMetricStatus.discriminator = undefined;
V2beta1ObjectMetricStatus.attributeTypeMap = [
    {
        "name": "averageValue",
        "baseName": "averageValue",
        "type": "string"
    },
    {
        "name": "currentValue",
        "baseName": "currentValue",
        "type": "string"
    },
    {
        "name": "metricName",
        "baseName": "metricName",
        "type": "string"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "V1LabelSelector"
    },
    {
        "name": "target",
        "baseName": "target",
        "type": "V2beta1CrossVersionObjectReference"
    }
];
exports.V2beta1ObjectMetricStatus = V2beta1ObjectMetricStatus;
//# sourceMappingURL=v2beta1ObjectMetricStatus.js.map
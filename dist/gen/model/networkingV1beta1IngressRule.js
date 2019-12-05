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
* IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
*/
class NetworkingV1beta1IngressRule {
    static getAttributeTypeMap() {
        return NetworkingV1beta1IngressRule.attributeTypeMap;
    }
}
NetworkingV1beta1IngressRule.discriminator = undefined;
NetworkingV1beta1IngressRule.attributeTypeMap = [
    {
        "name": "host",
        "baseName": "host",
        "type": "string"
    },
    {
        "name": "http",
        "baseName": "http",
        "type": "NetworkingV1beta1HTTPIngressRuleValue"
    }
];
exports.NetworkingV1beta1IngressRule = NetworkingV1beta1IngressRule;
//# sourceMappingURL=networkingV1beta1IngressRule.js.map
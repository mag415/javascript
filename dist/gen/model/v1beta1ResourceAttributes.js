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
* ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
*/
class V1beta1ResourceAttributes {
    static getAttributeTypeMap() {
        return V1beta1ResourceAttributes.attributeTypeMap;
    }
}
V1beta1ResourceAttributes.discriminator = undefined;
V1beta1ResourceAttributes.attributeTypeMap = [
    {
        "name": "group",
        "baseName": "group",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "namespace",
        "baseName": "namespace",
        "type": "string"
    },
    {
        "name": "resource",
        "baseName": "resource",
        "type": "string"
    },
    {
        "name": "subresource",
        "baseName": "subresource",
        "type": "string"
    },
    {
        "name": "verb",
        "baseName": "verb",
        "type": "string"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "string"
    }
];
exports.V1beta1ResourceAttributes = V1beta1ResourceAttributes;
//# sourceMappingURL=v1beta1ResourceAttributes.js.map
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
* SecretKeySelector selects a key of a Secret.
*/
class V1SecretKeySelector {
    static getAttributeTypeMap() {
        return V1SecretKeySelector.attributeTypeMap;
    }
}
V1SecretKeySelector.discriminator = undefined;
V1SecretKeySelector.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "optional",
        "baseName": "optional",
        "type": "boolean"
    }
];
exports.V1SecretKeySelector = V1SecretKeySelector;
//# sourceMappingURL=v1SecretKeySelector.js.map
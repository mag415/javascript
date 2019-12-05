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
* NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
*/
class V1NonResourceAttributes {
    static getAttributeTypeMap() {
        return V1NonResourceAttributes.attributeTypeMap;
    }
}
V1NonResourceAttributes.discriminator = undefined;
V1NonResourceAttributes.attributeTypeMap = [
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    },
    {
        "name": "verb",
        "baseName": "verb",
        "type": "string"
    }
];
exports.V1NonResourceAttributes = V1NonResourceAttributes;
//# sourceMappingURL=v1NonResourceAttributes.js.map
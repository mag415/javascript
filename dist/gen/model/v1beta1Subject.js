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
* Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
*/
class V1beta1Subject {
    static getAttributeTypeMap() {
        return V1beta1Subject.attributeTypeMap;
    }
}
V1beta1Subject.discriminator = undefined;
V1beta1Subject.attributeTypeMap = [
    {
        "name": "apiGroup",
        "baseName": "apiGroup",
        "type": "string"
    },
    {
        "name": "kind",
        "baseName": "kind",
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
    }
];
exports.V1beta1Subject = V1beta1Subject;
//# sourceMappingURL=v1beta1Subject.js.map
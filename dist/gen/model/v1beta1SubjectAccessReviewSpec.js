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
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
class V1beta1SubjectAccessReviewSpec {
    static getAttributeTypeMap() {
        return V1beta1SubjectAccessReviewSpec.attributeTypeMap;
    }
}
V1beta1SubjectAccessReviewSpec.discriminator = undefined;
V1beta1SubjectAccessReviewSpec.attributeTypeMap = [
    {
        "name": "extra",
        "baseName": "extra",
        "type": "{ [key: string]: Array<string>; }"
    },
    {
        "name": "group",
        "baseName": "group",
        "type": "Array<string>"
    },
    {
        "name": "nonResourceAttributes",
        "baseName": "nonResourceAttributes",
        "type": "V1beta1NonResourceAttributes"
    },
    {
        "name": "resourceAttributes",
        "baseName": "resourceAttributes",
        "type": "V1beta1ResourceAttributes"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "string"
    }
];
exports.V1beta1SubjectAccessReviewSpec = V1beta1SubjectAccessReviewSpec;
//# sourceMappingURL=v1beta1SubjectAccessReviewSpec.js.map
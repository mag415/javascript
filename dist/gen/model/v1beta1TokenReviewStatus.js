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
* TokenReviewStatus is the result of the token authentication request.
*/
class V1beta1TokenReviewStatus {
    static getAttributeTypeMap() {
        return V1beta1TokenReviewStatus.attributeTypeMap;
    }
}
V1beta1TokenReviewStatus.discriminator = undefined;
V1beta1TokenReviewStatus.attributeTypeMap = [
    {
        "name": "audiences",
        "baseName": "audiences",
        "type": "Array<string>"
    },
    {
        "name": "authenticated",
        "baseName": "authenticated",
        "type": "boolean"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "string"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "V1beta1UserInfo"
    }
];
exports.V1beta1TokenReviewStatus = V1beta1TokenReviewStatus;
//# sourceMappingURL=v1beta1TokenReviewStatus.js.map
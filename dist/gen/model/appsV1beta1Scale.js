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
* Scale represents a scaling request for a resource.
*/
class AppsV1beta1Scale {
    static getAttributeTypeMap() {
        return AppsV1beta1Scale.attributeTypeMap;
    }
}
AppsV1beta1Scale.discriminator = undefined;
AppsV1beta1Scale.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta"
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "AppsV1beta1ScaleSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "AppsV1beta1ScaleStatus"
    }
];
exports.AppsV1beta1Scale = AppsV1beta1Scale;
//# sourceMappingURL=appsV1beta1Scale.js.map
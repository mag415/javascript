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
* AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
*/
class PolicyV1beta1AllowedCSIDriver {
    static getAttributeTypeMap() {
        return PolicyV1beta1AllowedCSIDriver.attributeTypeMap;
    }
}
PolicyV1beta1AllowedCSIDriver.discriminator = undefined;
PolicyV1beta1AllowedCSIDriver.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.PolicyV1beta1AllowedCSIDriver = PolicyV1beta1AllowedCSIDriver;
//# sourceMappingURL=policyV1beta1AllowedCSIDriver.js.map
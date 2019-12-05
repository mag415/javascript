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
* Spec to control the desired behavior of rolling update.
*/
class V1RollingUpdateDeployment {
    static getAttributeTypeMap() {
        return V1RollingUpdateDeployment.attributeTypeMap;
    }
}
V1RollingUpdateDeployment.discriminator = undefined;
V1RollingUpdateDeployment.attributeTypeMap = [
    {
        "name": "maxSurge",
        "baseName": "maxSurge",
        "type": "object"
    },
    {
        "name": "maxUnavailable",
        "baseName": "maxUnavailable",
        "type": "object"
    }
];
exports.V1RollingUpdateDeployment = V1RollingUpdateDeployment;
//# sourceMappingURL=v1RollingUpdateDeployment.js.map
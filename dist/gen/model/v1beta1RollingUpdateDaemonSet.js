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
* Spec to control the desired behavior of daemon set rolling update.
*/
class V1beta1RollingUpdateDaemonSet {
    static getAttributeTypeMap() {
        return V1beta1RollingUpdateDaemonSet.attributeTypeMap;
    }
}
V1beta1RollingUpdateDaemonSet.discriminator = undefined;
V1beta1RollingUpdateDaemonSet.attributeTypeMap = [
    {
        "name": "maxUnavailable",
        "baseName": "maxUnavailable",
        "type": "object"
    }
];
exports.V1beta1RollingUpdateDaemonSet = V1beta1RollingUpdateDaemonSet;
//# sourceMappingURL=v1beta1RollingUpdateDaemonSet.js.map
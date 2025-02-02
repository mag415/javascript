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
* DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
*/
class V1beta1DaemonSet {
    static getAttributeTypeMap() {
        return V1beta1DaemonSet.attributeTypeMap;
    }
}
V1beta1DaemonSet.discriminator = undefined;
V1beta1DaemonSet.attributeTypeMap = [
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
        "type": "V1beta1DaemonSetSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1beta1DaemonSetStatus"
    }
];
exports.V1beta1DaemonSet = V1beta1DaemonSet;
//# sourceMappingURL=v1beta1DaemonSet.js.map
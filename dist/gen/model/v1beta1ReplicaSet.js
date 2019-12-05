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
* DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
*/
class V1beta1ReplicaSet {
    static getAttributeTypeMap() {
        return V1beta1ReplicaSet.attributeTypeMap;
    }
}
V1beta1ReplicaSet.discriminator = undefined;
V1beta1ReplicaSet.attributeTypeMap = [
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
        "type": "V1beta1ReplicaSetSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1beta1ReplicaSetStatus"
    }
];
exports.V1beta1ReplicaSet = V1beta1ReplicaSet;
//# sourceMappingURL=v1beta1ReplicaSet.js.map
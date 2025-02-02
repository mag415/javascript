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
* Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
*/
class V1Pod {
    static getAttributeTypeMap() {
        return V1Pod.attributeTypeMap;
    }
}
V1Pod.discriminator = undefined;
V1Pod.attributeTypeMap = [
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
        "type": "V1PodSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1PodStatus"
    }
];
exports.V1Pod = V1Pod;
//# sourceMappingURL=v1Pod.js.map
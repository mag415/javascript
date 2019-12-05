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
* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
*/
class V1ContainerState {
    static getAttributeTypeMap() {
        return V1ContainerState.attributeTypeMap;
    }
}
V1ContainerState.discriminator = undefined;
V1ContainerState.attributeTypeMap = [
    {
        "name": "running",
        "baseName": "running",
        "type": "V1ContainerStateRunning"
    },
    {
        "name": "terminated",
        "baseName": "terminated",
        "type": "V1ContainerStateTerminated"
    },
    {
        "name": "waiting",
        "baseName": "waiting",
        "type": "V1ContainerStateWaiting"
    }
];
exports.V1ContainerState = V1ContainerState;
//# sourceMappingURL=v1ContainerState.js.map
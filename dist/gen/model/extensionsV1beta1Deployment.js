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
* DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
*/
class ExtensionsV1beta1Deployment {
    static getAttributeTypeMap() {
        return ExtensionsV1beta1Deployment.attributeTypeMap;
    }
}
ExtensionsV1beta1Deployment.discriminator = undefined;
ExtensionsV1beta1Deployment.attributeTypeMap = [
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
        "type": "ExtensionsV1beta1DeploymentSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "ExtensionsV1beta1DeploymentStatus"
    }
];
exports.ExtensionsV1beta1Deployment = ExtensionsV1beta1Deployment;
//# sourceMappingURL=extensionsV1beta1Deployment.js.map
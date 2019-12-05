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
* DeploymentStrategy describes how to replace existing pods with new ones.
*/
class V1DeploymentStrategy {
    static getAttributeTypeMap() {
        return V1DeploymentStrategy.attributeTypeMap;
    }
}
V1DeploymentStrategy.discriminator = undefined;
V1DeploymentStrategy.attributeTypeMap = [
    {
        "name": "rollingUpdate",
        "baseName": "rollingUpdate",
        "type": "V1RollingUpdateDeployment"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1DeploymentStrategy = V1DeploymentStrategy;
//# sourceMappingURL=v1DeploymentStrategy.js.map
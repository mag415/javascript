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
* CustomResourceSubresources defines the status and scale subresources for CustomResources.
*/
class V1beta1CustomResourceSubresources {
    static getAttributeTypeMap() {
        return V1beta1CustomResourceSubresources.attributeTypeMap;
    }
}
V1beta1CustomResourceSubresources.discriminator = undefined;
V1beta1CustomResourceSubresources.attributeTypeMap = [
    {
        "name": "scale",
        "baseName": "scale",
        "type": "V1beta1CustomResourceSubresourceScale"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "object"
    }
];
exports.V1beta1CustomResourceSubresources = V1beta1CustomResourceSubresources;
//# sourceMappingURL=v1beta1CustomResourceSubresources.js.map
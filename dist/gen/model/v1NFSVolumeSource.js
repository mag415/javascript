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
* Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
*/
class V1NFSVolumeSource {
    static getAttributeTypeMap() {
        return V1NFSVolumeSource.attributeTypeMap;
    }
}
V1NFSVolumeSource.discriminator = undefined;
V1NFSVolumeSource.attributeTypeMap = [
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    },
    {
        "name": "server",
        "baseName": "server",
        "type": "string"
    }
];
exports.V1NFSVolumeSource = V1NFSVolumeSource;
//# sourceMappingURL=v1NFSVolumeSource.js.map
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
* Local represents directly-attached storage with node affinity (Beta feature)
*/
class V1LocalVolumeSource {
    static getAttributeTypeMap() {
        return V1LocalVolumeSource.attributeTypeMap;
    }
}
V1LocalVolumeSource.discriminator = undefined;
V1LocalVolumeSource.attributeTypeMap = [
    {
        "name": "fsType",
        "baseName": "fsType",
        "type": "string"
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    }
];
exports.V1LocalVolumeSource = V1LocalVolumeSource;
//# sourceMappingURL=v1LocalVolumeSource.js.map
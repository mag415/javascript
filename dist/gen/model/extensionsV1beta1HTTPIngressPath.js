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
* HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
*/
class ExtensionsV1beta1HTTPIngressPath {
    static getAttributeTypeMap() {
        return ExtensionsV1beta1HTTPIngressPath.attributeTypeMap;
    }
}
ExtensionsV1beta1HTTPIngressPath.discriminator = undefined;
ExtensionsV1beta1HTTPIngressPath.attributeTypeMap = [
    {
        "name": "backend",
        "baseName": "backend",
        "type": "ExtensionsV1beta1IngressBackend"
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    }
];
exports.ExtensionsV1beta1HTTPIngressPath = ExtensionsV1beta1HTTPIngressPath;
//# sourceMappingURL=extensionsV1beta1HTTPIngressPath.js.map
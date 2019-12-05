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
* AuditSink represents a cluster level audit sink
*/
class V1alpha1AuditSink {
    static getAttributeTypeMap() {
        return V1alpha1AuditSink.attributeTypeMap;
    }
}
V1alpha1AuditSink.discriminator = undefined;
V1alpha1AuditSink.attributeTypeMap = [
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
        "type": "V1alpha1AuditSinkSpec"
    }
];
exports.V1alpha1AuditSink = V1alpha1AuditSink;
//# sourceMappingURL=v1alpha1AuditSink.js.map
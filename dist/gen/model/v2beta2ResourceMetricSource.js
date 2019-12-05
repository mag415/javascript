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
* ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.  Only one \"target\" type should be set.
*/
class V2beta2ResourceMetricSource {
    static getAttributeTypeMap() {
        return V2beta2ResourceMetricSource.attributeTypeMap;
    }
}
V2beta2ResourceMetricSource.discriminator = undefined;
V2beta2ResourceMetricSource.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "target",
        "baseName": "target",
        "type": "V2beta2MetricTarget"
    }
];
exports.V2beta2ResourceMetricSource = V2beta2ResourceMetricSource;
//# sourceMappingURL=v2beta2ResourceMetricSource.js.map
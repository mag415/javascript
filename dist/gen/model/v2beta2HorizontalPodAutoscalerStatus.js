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
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
*/
class V2beta2HorizontalPodAutoscalerStatus {
    static getAttributeTypeMap() {
        return V2beta2HorizontalPodAutoscalerStatus.attributeTypeMap;
    }
}
V2beta2HorizontalPodAutoscalerStatus.discriminator = undefined;
V2beta2HorizontalPodAutoscalerStatus.attributeTypeMap = [
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V2beta2HorizontalPodAutoscalerCondition>"
    },
    {
        "name": "currentMetrics",
        "baseName": "currentMetrics",
        "type": "Array<V2beta2MetricStatus>"
    },
    {
        "name": "currentReplicas",
        "baseName": "currentReplicas",
        "type": "number"
    },
    {
        "name": "desiredReplicas",
        "baseName": "desiredReplicas",
        "type": "number"
    },
    {
        "name": "lastScaleTime",
        "baseName": "lastScaleTime",
        "type": "Date"
    },
    {
        "name": "observedGeneration",
        "baseName": "observedGeneration",
        "type": "number"
    }
];
exports.V2beta2HorizontalPodAutoscalerStatus = V2beta2HorizontalPodAutoscalerStatus;
//# sourceMappingURL=v2beta2HorizontalPodAutoscalerStatus.js.map
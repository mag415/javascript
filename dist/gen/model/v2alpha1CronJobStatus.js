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
* CronJobStatus represents the current state of a cron job.
*/
class V2alpha1CronJobStatus {
    static getAttributeTypeMap() {
        return V2alpha1CronJobStatus.attributeTypeMap;
    }
}
V2alpha1CronJobStatus.discriminator = undefined;
V2alpha1CronJobStatus.attributeTypeMap = [
    {
        "name": "active",
        "baseName": "active",
        "type": "Array<V1ObjectReference>"
    },
    {
        "name": "lastScheduleTime",
        "baseName": "lastScheduleTime",
        "type": "Date"
    }
];
exports.V2alpha1CronJobStatus = V2alpha1CronJobStatus;
//# sourceMappingURL=v2alpha1CronJobStatus.js.map
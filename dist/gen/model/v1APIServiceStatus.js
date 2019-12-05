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
* APIServiceStatus contains derived information about an API server
*/
class V1APIServiceStatus {
    static getAttributeTypeMap() {
        return V1APIServiceStatus.attributeTypeMap;
    }
}
V1APIServiceStatus.discriminator = undefined;
V1APIServiceStatus.attributeTypeMap = [
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1APIServiceCondition>"
    }
];
exports.V1APIServiceStatus = V1APIServiceStatus;
//# sourceMappingURL=v1APIServiceStatus.js.map
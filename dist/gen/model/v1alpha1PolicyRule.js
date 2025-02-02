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
* PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
*/
class V1alpha1PolicyRule {
    static getAttributeTypeMap() {
        return V1alpha1PolicyRule.attributeTypeMap;
    }
}
V1alpha1PolicyRule.discriminator = undefined;
V1alpha1PolicyRule.attributeTypeMap = [
    {
        "name": "apiGroups",
        "baseName": "apiGroups",
        "type": "Array<string>"
    },
    {
        "name": "nonResourceURLs",
        "baseName": "nonResourceURLs",
        "type": "Array<string>"
    },
    {
        "name": "resourceNames",
        "baseName": "resourceNames",
        "type": "Array<string>"
    },
    {
        "name": "resources",
        "baseName": "resources",
        "type": "Array<string>"
    },
    {
        "name": "verbs",
        "baseName": "verbs",
        "type": "Array<string>"
    }
];
exports.V1alpha1PolicyRule = V1alpha1PolicyRule;
//# sourceMappingURL=v1alpha1PolicyRule.js.map
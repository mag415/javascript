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
* A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
*/
class V1ScopeSelector {
    static getAttributeTypeMap() {
        return V1ScopeSelector.attributeTypeMap;
    }
}
V1ScopeSelector.discriminator = undefined;
V1ScopeSelector.attributeTypeMap = [
    {
        "name": "matchExpressions",
        "baseName": "matchExpressions",
        "type": "Array<V1ScopedResourceSelectorRequirement>"
    }
];
exports.V1ScopeSelector = V1ScopeSelector;
//# sourceMappingURL=v1ScopeSelector.js.map
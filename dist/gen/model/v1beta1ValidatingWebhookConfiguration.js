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
* ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
*/
class V1beta1ValidatingWebhookConfiguration {
    static getAttributeTypeMap() {
        return V1beta1ValidatingWebhookConfiguration.attributeTypeMap;
    }
}
V1beta1ValidatingWebhookConfiguration.discriminator = undefined;
V1beta1ValidatingWebhookConfiguration.attributeTypeMap = [
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
        "name": "webhooks",
        "baseName": "webhooks",
        "type": "Array<V1beta1ValidatingWebhook>"
    }
];
exports.V1beta1ValidatingWebhookConfiguration = V1beta1ValidatingWebhookConfiguration;
//# sourceMappingURL=v1beta1ValidatingWebhookConfiguration.js.map
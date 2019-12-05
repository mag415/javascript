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
* Webhook holds the configuration of the webhook
*/
class V1alpha1Webhook {
    static getAttributeTypeMap() {
        return V1alpha1Webhook.attributeTypeMap;
    }
}
V1alpha1Webhook.discriminator = undefined;
V1alpha1Webhook.attributeTypeMap = [
    {
        "name": "clientConfig",
        "baseName": "clientConfig",
        "type": "V1alpha1WebhookClientConfig"
    },
    {
        "name": "throttle",
        "baseName": "throttle",
        "type": "V1alpha1WebhookThrottleConfig"
    }
];
exports.V1alpha1Webhook = V1alpha1Webhook;
//# sourceMappingURL=v1alpha1Webhook.js.map
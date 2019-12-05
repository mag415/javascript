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
import { V1SELinuxOptions } from './v1SELinuxOptions';
/**
* SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
*/
export declare class PolicyV1beta1SELinuxStrategyOptions {
    /**
    * rule is the strategy that will dictate the allowable labels that may be set.
    */
    'rule': string;
    'seLinuxOptions'?: V1SELinuxOptions;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}

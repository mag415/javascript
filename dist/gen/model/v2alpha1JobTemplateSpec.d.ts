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
import { V1JobSpec } from './v1JobSpec';
import { V1ObjectMeta } from './v1ObjectMeta';
/**
* JobTemplateSpec describes the data a Job should have when created from a template
*/
export declare class V2alpha1JobTemplateSpec {
    'metadata'?: V1ObjectMeta;
    'spec'?: V1JobSpec;
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

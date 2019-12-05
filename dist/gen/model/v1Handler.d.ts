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
import { V1ExecAction } from './v1ExecAction';
import { V1HTTPGetAction } from './v1HTTPGetAction';
import { V1TCPSocketAction } from './v1TCPSocketAction';
/**
* Handler defines a specific action that should be taken
*/
export declare class V1Handler {
    'exec'?: V1ExecAction;
    'httpGet'?: V1HTTPGetAction;
    'tcpSocket'?: V1TCPSocketAction;
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

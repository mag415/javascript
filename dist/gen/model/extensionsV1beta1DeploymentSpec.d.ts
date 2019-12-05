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
import { ExtensionsV1beta1DeploymentStrategy } from './extensionsV1beta1DeploymentStrategy';
import { ExtensionsV1beta1RollbackConfig } from './extensionsV1beta1RollbackConfig';
import { V1LabelSelector } from './v1LabelSelector';
import { V1PodTemplateSpec } from './v1PodTemplateSpec';
/**
* DeploymentSpec is the specification of the desired behavior of the Deployment.
*/
export declare class ExtensionsV1beta1DeploymentSpec {
    /**
    * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
    */
    'minReadySeconds'?: number;
    /**
    * Indicates that the deployment is paused and will not be processed by the deployment controller.
    */
    'paused'?: boolean;
    /**
    * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. This is set to the max value of int32 (i.e. 2147483647) by default, which means \"no deadline\".
    */
    'progressDeadlineSeconds'?: number;
    /**
    * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
    */
    'replicas'?: number;
    /**
    * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. This is set to the max value of int32 (i.e. 2147483647) by default, which means \"retaining all old RelicaSets\".
    */
    'revisionHistoryLimit'?: number;
    'rollbackTo'?: ExtensionsV1beta1RollbackConfig;
    'selector'?: V1LabelSelector;
    'strategy'?: ExtensionsV1beta1DeploymentStrategy;
    'template': V1PodTemplateSpec;
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

export interface Cluster {
    readonly name: string;
    readonly caData?: string;
    caFile?: string;
    readonly server: string;
    readonly skipTLSVerify: boolean;
}
export declare function newClusters(a: any): Cluster[];
export declare function exportCluster(cluster: Cluster): any;
export interface User {
    readonly name: string;
    readonly certData?: string;
    certFile?: string;
    readonly exec?: any;
    readonly keyData?: string;
    keyFile?: string;
    readonly authProvider?: any;
    readonly token?: string;
    readonly username?: string;
    readonly password?: string;
}
export declare function newUsers(a: any): User[];
export declare function exportUser(user: User): any;
export interface Context {
    readonly cluster: string;
    readonly user: string;
    readonly name: string;
    readonly namespace?: string;
}
export declare function newContexts(a: any): Context[];
export declare function exportContext(ctx: Context): any;

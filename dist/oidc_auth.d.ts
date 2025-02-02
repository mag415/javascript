/// <reference types="node" />
import https = require('https');
import request = require('request');
import { Authenticator } from './auth';
import { User } from './config_types';
export declare class OpenIDConnectAuth implements Authenticator {
    private currentTokenExpiration;
    isAuthProvider(user: User): boolean;
    /**
     * Setup the authentication header for oidc authed clients
     * @param user user info
     * @param opts request options
     * @param overrideClient for testing, a preconfigured oidc client
     */
    applyAuthentication(user: User, opts: request.Options | https.RequestOptions, overrideClient?: any): Promise<void>;
    private getToken;
    private refresh;
    private getClient;
}

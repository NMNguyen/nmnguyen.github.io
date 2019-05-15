const _e = (str: string) => 'auth/' + str;
export default {
    APP_DELETED: _e('app-deleted'),
    APP_NOT_AUTHORIZED: _e('app-not-authorized'),
    ARGUMENT_ERROR: _e('argument-error'),
    INVALID_API_KEY: _e('invalid-api-key'),
    INVALID_USER_TOKEN: _e('invalid-user-token'),
    NETWORK_REQUEST_FAILED: _e('network-request-failed'),
    OPERATION_NOT_ALLOWED: _e('operation-not-allowed'),
    REQUIRES_RECENT_LOGIN: _e('requires-recent-login'),
    TOO_MANY_REQUEST: _e('too-many-requests'),
    UNAUTHORIZED_DOMAIN: _e('unauthorized-domain'),
    USER_DISABLED: _e('user-disabled'),
    USER_TOKEN_EXPIRED: _e('user-token-expired'),
    WEB_STORAGE_UNSUPPORTED: _e('web-storage-unsupported'),
}

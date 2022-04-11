
export const ERROR_NAME = {
    CHUNK_LOAD: 'CHUNK_LOADError',
    PERMISSION_DENIED : 'permission-denied',
    DEFAULT_ERROR: 'default',
}


export const ERROR_MESSAGE = new Map([
    [ERROR_NAME.CHUNK_LOAD, 'We updated our website with latest release. Please reload again.'],
    [ERROR_NAME.PERMISSION_DENIED, `{0} doesn't have permission to allow {1} operation.`],
    [ERROR_NAME.DEFAULT_ERROR, `Something went wrong. Please try again later.`]
])
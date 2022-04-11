import { ERROR_NAME, ERROR_MESSAGE } from "../constants/errorMessage";

export const getErrorParser = (error: Error): { message: string } => {
    const { name = '', message = '' } = error;

    switch (name) {
        case ERROR_NAME.CHUNK_LOAD:
            return {
                message: ERROR_MESSAGE.get(ERROR_NAME.CHUNK_LOAD) ?? ''
            };
        case ERROR_NAME.PERMISSION_DENIED:
            return {
                message: ERROR_MESSAGE.get(ERROR_NAME.PERMISSION_DENIED) ?? ''
            };
        default:
            if (message.includes("Loading CSS chunk") && message.includes("failed.")) {
                return {
                    message: ERROR_MESSAGE.get(ERROR_NAME.CHUNK_LOAD) ?? ''
                }
            }
            if (message.includes("permission-denied")) {
                return {
                    message: ERROR_MESSAGE.get(ERROR_NAME.PERMISSION_DENIED) ?? ''
                }
            }
            return {
                message: ERROR_MESSAGE.get(ERROR_NAME.DEFAULT_ERROR) ?? ''
            };
    }
}

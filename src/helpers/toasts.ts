import { notification } from "antd";

type INotification = 'error' | 'success' | 'info' | 'warning';

export const showToast = (type: INotification, message: string, title: string, duration?: number) => {
    notification[type]({
        message: title,
        description: message,
        duration,
    })
}
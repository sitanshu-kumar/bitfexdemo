
import { message } from 'antd';

const success = (msg) => {
    message.success(msg);
};

const error = (msg) => {
    message.error(msg);
};

const warning = (msg) => {
    message.warning(msg);
};


export { success, error, warning }
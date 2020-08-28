import { toast } from 'react-toastify';

export const toastError = err => {
    var message = null;
    if (err.message) {
        ({ message } = err); // Vì là phép gán nên phải đóng ngoặc
    }
    if (message !== '' && message !== null && typeof message !== undefined) {
        toast.error(`${message}`);
    }
}

export const toastSuccess = () => {
    toast.success(`LoadData Success`);
}


export const addTaskSuccses = () => {
    toast.success(`Add Task Succes`);
}


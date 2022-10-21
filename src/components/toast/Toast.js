import {FaTimes} from 'react-icons/fa';

import './Toast.css';

const Toast=({toastIsOpen,toast,toastCloseHandler})=>{
    return (
        <div className={toastIsOpen?`toast toast-${toast.type} toast-open`:`toast toast-${toast.type} toast-close`}>
            <p className="toast-message">{toast.message}</p>
            <FaTimes className="close-icon" onClick={toastCloseHandler} />
        </div>
    );
}

export default Toast;
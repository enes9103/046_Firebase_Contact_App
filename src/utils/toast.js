import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Toastify=(msg)=>{
toast.success(msg, {
    position: "bottom-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}
    export default Toastify;
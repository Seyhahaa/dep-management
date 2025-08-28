import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';




export function showToast(message) {
const toast = useToast();
toast.success(message,{
    position: 'top-right',
    duration: 5000,
    dismissible: true,
    pauseOnHover: true,
    closeButton: true,
});
// Force dismiss specific toast

// Dismiss all opened toast immediately
toast.clear();
}
export function showErrorToast(message) {
const toast = useToast();
toast.error(message)
}

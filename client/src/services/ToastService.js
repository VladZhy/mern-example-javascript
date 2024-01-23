import { toast } from 'react-toastify';

class ToastService {
  static showSuccess(successMessage, toastId) {
    toast.success(successMessage, {
      toastId,
    });
  }

  static showError(errorMessage, toastId) {
    toast.error(errorMessage, {
      toastId,
    });
  }
}

export default ToastService;

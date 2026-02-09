import Swal from 'sweetalert2';

export class AlertUtil {

  static error(title: string, text?: string) {
    return Swal.fire({
      icon: 'error',
      title,
      text,
      confirmButtonText: 'OK'
    });
  }

  static success(title: string, text?: string) {
    return Swal.fire({
      icon: 'success',
      title,
      text,
      confirmButtonText: 'OK'
    });
  }

  static info(title: string, text?: string) {
    return Swal.fire({
      icon: 'info',
      title,
      text,
      confirmButtonText: 'OK'
    });
  }
}

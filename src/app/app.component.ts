import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notifications';

  simpleAlert() {
    Swal.fire("Hello World!");
    setTimeout(() => {
      this.successAlert()
    }, 2000);
  }

  successAlert() {
    Swal.fire("Thank You...", "You Submitted Successfully", "success");
  }

  failAlert() {
    Swal.fire({
      title: 'הופעל אירוע מס׳ 1443',
      text: 'אירוע מס׳ 1443: ירי טילים על רחובות',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'סגור הודעה',
      cancelButtonText: 'פתח כרטיס אירוע'
    }).then((result) => {
      if(result.value) {
        Swal.fire("סגירת אירוע", "במקום ההודעה הזו לא להכניס כלום ושהכרטיס ייסגר", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('אירוע 1443', 'במקום ההודעה הזו צריך לסגור את ההודעה ולפתוח את כרטיס האירוע', 'info')
      }
    });
  }
}

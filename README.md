# AngularNotifications
## Simple Notifications in Angular using SweetAlert2

>Install the SweetAlert2 packege using this command: ```npm install sweetalert2```

>in the angular.json file, add to the ```style``` array (after the ```src/styles.css```) the following line: ```node_modules/sweetalert2/src/sweetalert2.scss```

<pre><code>
"styles": [
    "src/styles.css",
    "node_modules/sweetalert2/src/sweetalert2.scss"
],
</code></pre>


>in the desired component, import the package: ```import Swal from 'sweetalert2';```

>you can start using the package by invoking the fire method (```Swal.fire...```).

>For more information about the package see the following documentation: `https://sweetalert2.github.io/#examples`

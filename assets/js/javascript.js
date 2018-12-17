
//Review code

// Titlurile coloanelor
   var arrHead = new Array();
   arrHead = ['', 'Nume si prenume', 'Review', 'Age'];

   // Crearea tabelului
   function createTable() {
       var empTable = document.createElement('table');
       empTable.setAttribute('id', 'empTable');

       var tr = empTable.insertRow(-1);

       for (var h = 0; h < arrHead.length; h++) {
           var th = document.createElement('th');
           th.innerHTML = arrHead[h];
           tr.appendChild(th);
       }

       var div = document.getElementById('content');
       div.appendChild(empTable);
   }

   // Adaugarea unei noi linii in tabel
   function addRow() {
       var empTab = document.getElementById('empTable');

       var rowCnt = empTab.rows.length;
       var tr = empTab.insertRow(rowCnt);
       tr = empTab.insertRow(rowCnt);

       for (var c = 0; c < arrHead.length; c++) {
           var td = document.createElement('td');
           td = tr.insertCell(c);

           if (c == 0) {
               var button = document.createElement('input');

               button.setAttribute('type', 'button');
               button.setAttribute('value', 'Remove');

               button.setAttribute('onclick', 'removeRow(this)');

               td.appendChild(button);
           }
           else {
               // CREATE AND ADD TEXTBOX IN EACH CELL.
               var element = document.createElement('input');
               element.setAttribute('type', 'text');
               element.setAttribute('value', '');

               td.appendChild(element);
           }
       }
   }

   // Stergerea unei linii din tabel
   function removeRow(oButton) {
       var empTab = document.getElementById('empTable');
       empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
   }

   // Salvarea datelor din tabel.
   function sumbit() {
       var myTab = document.getElementById('empTable');
       var values = new Array();

       for (row = 1; row < myTab.rows.length - 1; row++) { // Trecem prin celulele fiecarei linii
           for (c = 0; c < myTab.rows[row].cells.length; c++) {

               var element = myTab.rows.item(row).cells[c];
               if (element.childNodes[0].getAttribute('type') == 'text') {
                   values.push("'" + element.childNodes[0].value + "'");
               }
           }
       }
       console.log(values);
   }

// Mouse event


  var img1 = document.getElementById("img1");

  function myFunction(e) {

    posX = event.clientX - window.innerWidth/2;
    posY = event.clientY - window.innerWidth/6;
    console.log(img1);

    img1.style.transform = "perspective(500px) rotateY("+posX*0.05+"deg) rotateX("+posY*(-0.05)+"deg)" ;

  };

// AJAX

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "text.txt", true);
  xhttp.send();
}

function send() {
  var http = new XMLHttpRequest();
  var url = 'text.txt';
  var params = 'orem=ipsum&name=binny';
  http.open('POST', url, true);

  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
      }
  }
  http.send(params);
}

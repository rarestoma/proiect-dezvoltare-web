
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


// Mouse event


  function myFunction(e) {

    posX = event.clientX - window.innerWidth/2;
    posY = event.clientY - window.innerWidth/6;

    img1.style.transform = "perspective(500px) rotateY("+posX*0.01+"deg) rotateX("+posY*(-0.01)+"deg)" ;
    img2.style.transform = "perspective(500px) rotateY("+posX*0.01+"deg) rotateX("+posY*(-0.01)+"deg)" ;
    img3.style.transform = "perspective(500px) rotateY("+posX*0.01+"deg) rotateX("+posY*(-0.01)+"deg)" ;

  };


//AJAX

fetch('db.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {

        var info = new Array();
        info = data;

        var news = document.getElementsByClassName("news-story")[0];

        for(var i = 0; i < info.dogs.length; i++) {
            var h5 = document.createElement("h5");
            h5.innerHTML = info.dogs[i].id;
            news.appendChild(h5);
            var p = document.createElement("p");
            p.innerHTML = info.dogs[i].name;
            news.appendChild(p);

        }

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error', err);
  });


  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
  xmlhttp.open("POST", "/json-handler");
  xmlhttp.setRequestHeader("Content-Type", 'https://rarestoma.github.io/proiect-dezvoltare-web/db.json');
  xmlhttp.send(JSON.stringify({"id": 10, "name": "baci", "img": "https:\/\/dog.ceo\/api\/img\/affenpinscher\/n02110627_11584.jpg"}));

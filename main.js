const data = fetch("data.json")
    .then(response => response.json())
    .then(json => {
        const names = document.getElementsByClassName("names");
        var i;
        for (i = 1; i <= names.length; i++) {
            if (json["name"+i] == ""){
                names[i-1].style.borderColor = "red";
            }

            else{
                names[i-1].style.borderColor = "green";
                names[i-1].value = json["name"+i];
                names[i-1].disabled = true;
            }
        }
    });

    var now = new Date();
    var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 51, 0, 0) - now;
    if (millisTill10 < 0) {
      millisTill10 += 86400000; // milliseconds in a day .
    }
    setTimeout(function () {
              window.location.reload(true);
            }, millisTill10);
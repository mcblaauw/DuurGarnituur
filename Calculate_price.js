function Make_Menu() {
    // Key -> value structure of menu
    return Menu = {
        "Bitterballen (6 stuks)": 15.50, 
        "Bitterballen (12 stuks)": 25.50, 
        "Kaassoufle": 6.50, 
        "Frikandel": 4.50,
        "Frikandel Speciaal": 5.50,
        "Bereklauw": 6.00, 
        "Koffie": 4.60,
        "Thee": 3.50,
        "Bier": 6.50
    };
}

function Print_Menu() {
    // get menu
    var Menu = Make_Menu();
    // print it
    for (var product in Menu) {
        document.getElementById("Show_menu").innerHTML += "Price of " + product + " is €" + Menu[product] + "<br>";
    }  
}

function Counter() {
    // Import all menu product names
    var Menu = Make_Menu();

    // loop over menu items to get their IDs
    var total = 0;
    var menu_id = 0;
    for (var product in Menu) {
        // get number of items given the menu_id
        var aantal = document.getElementById(menu_id).value;
        // add price to total price
        total += aantal*Menu[product];
        menu_id++;
    }
    // initiele fooi
    var fooi = 10; // in procenten
    var total_eind = Eindbedrag(total,fooi);

    // output to HTML + some new awesome javascript cases
    HTMLmaker(total,fooi,total_eind);
}

function Eindbedrag (total, fooi) {
    return total_e = total*(1+fooi/100);
}

function ChangeTotal(total) {
    var newfooi = fooi_id.value;
    new_total_eind = Eindbedrag(total,newfooi);
    HTMLmaker(total,newfooi,new_total_eind);
}

function HTMLmaker(itot,ifooi,itote) {
    HTML = 'Uw bedrag wordt: €' + itot.toFixed(2) + '<br>';
    HTML += 'Fooi (10% is aanbevolen): <input type="number" id="fooi_id" onchange=ChangeTotal('+itot+') value=' + Math.round(ifooi) + '></input><br><hr>';
    HTML += '<b>Eindbedrag</b>: €' + itote.toFixed(2) +'<br><br>';
    HTML += '<button class="btn btn-danger" type="button" onClick="Payment()">Naar betalen</button>';
    document.getElementById("Total_price").innerHTML = HTML;
}

function Payment() {
    window.alert('U heeft betaald. Tot ziens!');
    location.reload(); //reload page
}
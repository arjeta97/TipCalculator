function calculateTip(){
    var bill=document.getElementById("billInput").value;
    var billInt = parseInt(bill);
    var tip;
    var tot;
    if(bill>100 && bill<=300){

        tip = Math.round(billInt*0.1);
        document.getElementById("yourTip").innerHTML = tip;
        tot = billInt + tip;
        document.getElementById("totalBill").innerHTML = tot;

    } else if (bill>300 && bill<=500){

        tip = Math.round(billInt*0.05);
        document.getElementById("yourTip").innerHTML = tip;
        tot = billInt + tip;
        document.getElementById("totalBill").innerHTML = tot;

    }else if (bill>500){

        tip = Math.round(billInt*0.03);
        document.getElementById("yourTip").innerHTML = tip;
        tot = billInt + tip;
        document.getElementById("totalBill").innerHTML = tot;

    }
    else{
        document.getElementById("yourTip").innerHTML = 'No tip needed';
        document.getElementById("totalBill").innerHTML = bill;
    }
}

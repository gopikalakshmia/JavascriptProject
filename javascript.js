function add(){
    let sum=0;
    var selected=document.getElementsByName('check');
    var price=document.getElementsByName('Price');
    var Quantity=document.getElementsByName('Quantity');
    for(let i=0;i<selected.length;i++){
        if(selected[i].checked==true){
            sum=sum+(price[i].value*Quantity[i].value)
        }

    }
    document.getElementById("Total").innerHTML=sum;
    console.log(sum);

}
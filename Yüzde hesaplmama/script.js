function hesapla() 
{
var a=document.getElementById("a_sayisi").value;
var b=document.getElementById("b_sayisi").value;
var val = document.getElementById('islem').value;
if(val=="a") {
var sonuc=(a/100)*b;
document.getElementById('demo').innerHTML="A sayısı="+a+"<br>B sayısı="+b+"<br>"+a+" sayısının %"+ b+ " i ="+sonuc;
} 
else if(val=="b") {
var sonuc=(a/b)*100;
sonuc=sonuc.toFixed(2);
document.getElementById('demo').innerHTML="A sayısı="+a+"<br>B sayısı="+b+"<br>"+a+" sayısı "+ b+ " sayısının "+ "% "+ sonuc+" kadarıdır";
} 
else if(val=="c") {
var sonuc=(((b-a)/a)*100);
sonuc=sonuc.toFixed(2);
if (sonuc<0)
{
sonuc=sonuc*-1;
document.getElementById('demo').innerHTML="A sayısı="+a+"<br>B sayısı="+b+"<br>"+a+" sayısından "+ b+ " sayısına değişim oranı % "+ sonuc+" azalış";
} 
else if (sonuc>0)
{
document.getElementById('demo').innerHTML="A sayısı="+a+"<br>B sayısı="+b+"<br>"+a+" sayısından "+ b+ " sayısına değişim oranı % "+ sonuc+" artış";
} 
}
else if(val=="d") 
{
var sonuc=((a/100)*b);
sonuc=Number(a)+Number(sonuc);
sonuc=sonuc.toFixed(2);
document.getElementById('demo').innerHTML="A sayısı="+a+"<br>B sayısı="+b+"<br>"+a+" sayısını % "+ b+ " artırırsak sonuc "+ sonuc+" olur.";
} 
else if(val=="e") 
{
var sonuc=(a/100)*b;
sonuc=a-sonuc;
sonuc=sonuc.toFixed(2);
document.getElementById('demo').innerHTML="A sayısı="+a+"<br>B sayısı="+b+"<br>"+a+" sayısını % "+ b+ " azaltırsak sonuc "+ sonuc+" olur.";
} 
}

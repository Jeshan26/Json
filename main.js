let message= document.getElementById('message');
let btn=document.getElementById("btn");


let message1=`Mainu ni pata what happened...  but i dont think bad of you and na kadi galat sochea kuch.....  i respect all your decisions and ma bas eh clear krna c ki  j tenu lagda ki kite ma
Kuch kehta galat kyuki kai cheej hundi bnda kehnda kisi hor tareeke nal but dooja bnda kuch hor samaj lenda..  and all..  eda haini kuch.... 
i didnt messaged u direct u know why maybe..bas ehna hi... and haan vse te ma positive bnda haga but maybe i gave negative vibes taahii  hun eda di cheeja v dekhi ma hundi jo maybe nahi honi...anyways. And ehvi na samji ki jo v kadi tu share kita mere nal oh ma kisi nu  dsu ga. .. never....i just wanted to make it clear in your head.... chal  best of luck for you ahead.. Be positive everytime..:) ..Ik last gal decision soch k lia kr lol.. har decision to baad vekhi jaygi nhi hunda .....`


let count=0;
btn.addEventListener('click',messa);

function messa(){

if(count==0)
    message.append(message1);
    count++;
}




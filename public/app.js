/**
 * Created by am on 31.07.16.
 */

function clickButton(){
    var x = window.localStorage.getItem('aaa');

    x = x + 1;
    
    window.localStorage.setItem('aaa', x);

    alert(x);
}
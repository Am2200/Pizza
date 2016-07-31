/**
 * Created by am on 31.07.16.
 */

function clickButton(){
    var x = window.localStorage.getItem('bbb');

    x = x * 1 + 1;

    window.localStorage.setItem('bbb', x);

    alert(x);
}
function a(){
    $.ajax(parm1,c);
}
a(function c(){
    console.log("ll");
})
function x(p){
    먼저실행하고픈함수();
    p();
}

x(function p(){
    그다음으로실행하고픈함수();
});
$(function(){
    $("[type='checkbox']").on("change",updateProgress);
});

function updateProgress(){
    let hasCheckced=0;
    for(let x=0;x<$("[type='checkbox']").length;x++){
        if($("[type='checkbox']")[x].checked){
            hasCheckced+=1;
        }
    }

    $("meter").attr("max",$("[type='checkbox']").length);
    $("meter").attr("value",hasCheckced);
}
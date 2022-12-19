/* 
    Miguel Ángel Carmona Sánchez
    2DAW - Cesur Málaga este
*/

window.addEventListener("load", function () {

    document.querySelector('button.new_client').addEventListener('click', function(){
        document.querySelector('#new_client').classList.remove('display_none');
    });
    document.querySelector('button.close').addEventListener('click', function(){
        document.querySelector('#new_client').classList.add('display_none');
    });

});
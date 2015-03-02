$(document).ready(function(){

    $.datepicker.setDefaults({
        showOn: 'focus',
        dateFormat: 'yy-mm-dd',
    });

    $("#id_start_utc_0").datepicker();
    $("#id_end_utc_0").datepicker();

});

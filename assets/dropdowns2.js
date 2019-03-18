$(document).ready(function () {

    load_json_data('games');

    function load_json_data(id, parent_id) {
        var html_code = '';
        $.getJSON('https://psychlosuo.github.io/Group-Project-1/data/dropdown_data.json', function (data) {


            html_code += '<option value="">Select ' + id + '</option>';
            $.each(data, function (key, value) {
                if (id == 'games') {
                    if (value.parent_id == '0') {
                        html_code += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                }
                else {
                    if (value.parent_id == parent_id) {
                        html_code += '<option value="' + value.id + '">' + value.name + '</option>';
                    }
                }
            });
            $('#' + id).html(html_code);
        });

    }

    $(document).on('change', '#games', function () {
        var games_id = $(this).val();
        if (games_id != '') {
            load_json_data('sports', games_id);
        }
        else {
            $('#sports').html('<option value="">Select a Sport</option>');
            $('#events').html('<option value="">Select an Event</option>');
        }
    });
    $(document).on('change', '#sports', function () {
        var sports_id = $(this).val();
        if (sports_id != '') {
            load_json_data('events', sports_id);
        }
        else {
            $('#events').html('<option value="">Select an Event</option>');
        }
    });
});
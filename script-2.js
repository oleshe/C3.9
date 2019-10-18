const all_checkbox_num1 = $('.checkbox_num1') 
var check_limit = 6; 
var all_checkbox_values = get_class_values ('.checkbox_num1');

document.addEventListener("DOMContentLoaded", function() {
    if (check_str_with_arr(document.cookie, all_checkbox_values))
    {
        var all_cookie_arr = document.cookie.split(";") 
        var cookie_arr = all_cookie_arr.filter(fnc => all_checkbox_values.includes(fnc.split("=")[1]));
        for (var jj = 0; jj < cookie_arr.length; jj++) {
            var cookie_val = cookie_arr[jj].split("=")[1]
            document.getElementsByClassName(cookie_val)[0].setAttribute("checked", "true");
        }
        if (cookie_arr.length == 3)
        {
            for (var i = 0; i < all_checkbox_num1.length; i++) {
                all_checkbox_num1[i].setAttribute("disabled", "disabled");
        }
        }
    }
    else {
        for (var i = 0; i < all_checkbox_num1.length; i++) {
            if (all_checkbox_num1[i].hasAttribute('checked'))
            {
                all_checkbox_num1[i].removeAttribute('checked');
            }    

        }
    }
});

$('input.checkbox_num1').on('change', function(evt) {
    var num_of_checked = $(this).siblings(':checked').length
    if (this.checked) { 
        var cookie_str = this.value + '=' + this.value + '; max-age=2678400‬';
        document.cookie = cookie_str;
    }
    else {
        var cookie_str = this.value + '=' + this.value + '; max-age=-1';
        document.cookie = cookie_str;
    }
    if($(this).siblings(':checked').length >= check_limit) {
        this.checked = false;
    }
});

$('input.checkbox_num1').on('input', function(evtt) {
    if($(this).siblings(':checked').length == (check_limit-1)) {
        var num_of_checked = $(this).siblings(':checked').length
        var cookie_str = this.value + '=' + this.value + '; max-age=2678400‬';
        document.cookie = cookie_str;
        for (var i = 0; i < all_checkbox_num1.length; i++) {
            all_checkbox_num1[i].setAttribute("disabled", "disabled");
        }
    }
});

reset_c.onclick = () => {
    all_checkbox_values.forEach( function(element, index) {
        document.cookie = `${element}=${element}; max-age=-1`
    });
    window.location.reload();
}

function check_str_with_arr(str, arr) {
    var result_cswa = false;
    for (var i = 0; i < arr.length; i++) {
            if (str.includes(arr[i])) result_cswa = true;
    }
    return result_cswa
}

function get_class_values (cls_str) {
    var cls_obj = $(cls_str);
    var gcv = [];
    for (var i = 0; i < cls_obj.length; i++){
        gcv[i] = cls_obj[i].value;
    }
    return gcv
}

$(document).ready(function(){
    var numberOfsentences = 0
    var numberOfWords = 0
    getStart = function(){
        eel.ready($('#data').val())(function(re){
            $('.wellcome-heading p').fadeOut('fast').text(re[1]+' sentences and '+re[0]+' words are found !').fadeIn()
            numberOfWords   =   re[0]
            numberOfsentences = re[1]
        })
        $('.get-start-area form').slideUp()
        $('.get-start-area .container').removeClass('hide').fadeIn()
    }

    genarate = function(){
        ['words', 'sentences'].forEach(function(value, index){
            valid(value)
            if(isFinite($('#'+value).val())==true){
                if($('#'+value).val() > numberOfWords && index===0){
                    invalid(value, numberOfWords)
                }else if($('#'+value).val() > numberOfsentences && index===1){
                    invalid(value, numberOfsentences)
                }else{
                    $('#'+value+'-list').empty()
                    rand(value, $("#"+value).val())
                }
            }else{invalid(value, numberOfWords, 2)}
        })
    }
    rand = function(op_name, number){
        val = eel.random_list(op_name, number)(function(value){
            for(i=0; i<number; i++){
                if(value[i]===''){continue}
                $('#'+op_name+'-list').append('<li class="list-group-item">'+value[i]+'</li>')
            }
        })
    }

    invalid = function(op_name, number, msg=1){
        if(msg===1){msg = 'Random number should be less than '+number
        }else{msg = 'Input should be a number (0-'+number+').'}
        $('#'+op_name).focus().addClass('is-invalid').next().text(msg).slideDown()
    }
    valid = function(op_name){
        $('#'+op_name).removeClass('is-invalid').next().text('').slideUp()
    }
});
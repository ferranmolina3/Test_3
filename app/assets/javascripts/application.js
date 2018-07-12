// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
    $("#submit").click(function(){
        var todoBlock = $(this).closest("#todo")    
        var description = todoBlock.find("#itemname") 
        var pomodoroEstimate = todoBlock.find("#pomodoros")
        var descriptionName = todoBlock.find("#descriptionname")
        $("ol").append(" <li><input type = 'checkbox'/> <Font size = '5'>" +description.val()+ "</Font> <span class = ' pomodoro-estimate ' > " + pomodoroEstimate.val() + " pomodoro </span> <small> <div>" + descriptionName.val() + "</div></small> </li> ")
        
        description.val("")
        pomodoroEstimate.val("") 
        descriptionName.val("")
        
    })
    $("ol").on("click", "input[type=checkbox]",function(){
        $(this).closest("li").toggleClass("completed-todo")
        
        
    
    
    })
    
    
    }) 
// if you edit your js file,
//   make sure your browser does not cache it

$('button[id = "list"]').click(function(){
  $.ajax({
    url: 'get_students.php',
    success: function(data){
      $('#student_list').html(data);
    }
  });
});

$('#ajax-form button[type = submit]').click((event) => {
  event.preventDefault()

  $.get(('search_stu.php'), {
    ID: $('#ajax-form input[name=ID]').val()
  }, (data) => {
    $('#ajax-output').html(data)
  })
  //setTimeout(() => $('#ajax-output').html('loading...'), 3000)
})

$('#ajax-add button[type = submit]').click((event) => {
  event.preventDefault()

    $.get(('add_stu.php'), {
      ID: $('#ajax-add input[name=ID]').val(),
      name: $('#ajax-add input[name=name]').val(),
    }, (data) => {
    })
})

$('#ajax-del button[type = submit]').click((event) => {
  event.preventDefault()

    $.get(('del_student.php'), {
      ID: $('#ajax-del input[name=ID]').val(),
    }, (data) => {
    })
})

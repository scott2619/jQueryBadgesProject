$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/scott2619.json',
    dataType: 'jsonp',
    success: function(response) {
      $.each(response.courses.completed, function(index,course){
        var $course = $('<div />', {'class': 'course' }).appendTo('#badges');
        $('<h3 />',{'text':course.title}).appendTo($course);
        $('<img />',{'src':course.badge}).appendTo($course);
        $('<a />',{'href':course.url, 'class':'btn btn-primary','text':'See Course','target':'_blank'}).appendTo($course);;
      });
    }
  });
});

alert("destroyed")
var id =  <%= @id %> 
$('li[data-id='+ id +']').remove()
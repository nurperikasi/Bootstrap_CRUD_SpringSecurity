/**
 *
 */

$( document ).ready(function() {

    $('.table #editButton').on('click',function(event){

        event.preventDefault();

        let href=$(this).attr('href');

        $.get(href,function(user, roles){
            $('#editId').val(user.id)
            $('#editName').val(user.name)
            $('#editLastName').val(user.lastName)
            $('#editPassword').val(user.password)

            $('#editRoles').val(roles)
        });

        $('#editModalPage').modal();

    });

});
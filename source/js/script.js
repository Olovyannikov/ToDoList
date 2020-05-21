$(function () {
    $('#addItem')
        .click(function () {
            $('.empty').remove();
            var newBlock = $('<div class="list list-add"></div>');
            var newTask = $('<h3 class="list__head"></h3>');
            var iconCross = $('<span class="list__head-icon" onclick="$(this).closest(\'.list\').remove();">❌</span>')
            var newElement = $('<p class="list__content"></p>');
            var task = document.querySelector('#name');
            var description = document.querySelector('#describe');

            newTask.text(task.value);
            newElement.text(description.value);
            $('.column-left').append(newBlock);

            $(newBlock).append(newTask).append(iconCross).append(newElement);

        });
});


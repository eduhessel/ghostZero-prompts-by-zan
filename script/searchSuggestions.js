$(document).ready(function () {
    $('#searchInput').keyup(function () {
        var query = $(this).val();
        if (query !== '') {
            $.ajax({
                url: 'https://suggestqueries.google.com/complete/search',
                data: { q: query, client: 'firefox', hl: 'en' },
                dataType: 'jsonp',
                success: function (data) {
                    var suggestions = data[1];
                    if(suggestions == 0)
                    {
                        $('#suggestionsContainer').css('display', 'none');
                        displaySuggestions(suggestions);
                    }
                    else
                    {
                        $('#suggestionsContainer').css('display', 'block');
                        displaySuggestions(suggestions);
                    }
                }
            });
        }
        else {
            $('#suggestionsContainer').css('display', 'none');
            clearSuggestions();
        }

        $('#searchInput').blur(function () {
            clearSuggestions(),
            $('#suggestionsContainer').css('display', 'none');
        });
    });

    function displaySuggestions(suggestions) {
        var listItems = 'Suggestions by Google:';
        $.each(suggestions, function (index, suggestion) {
            listItems += '<li style="padding-top: 12px; color: #fff">' + suggestion + '</li>';
        });
        $('#suggestionsList').html(listItems);
    }

    function clearSuggestions() {
        $('#suggestionsList').text('Suggestions have been deleted. Type something to come up with suggestions');
        setTimeout(function() {
            $('#suggestionsList').empty();
        }, 5000);
    }


});

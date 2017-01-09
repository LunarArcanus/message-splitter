function chunk(arr, chunkSize) {
  var R = [];
  for (var i=0,len=arr.length; i<len; i+=chunkSize)
    R.push(arr.slice(i,i+chunkSize));
  return R;
}

function messageSplit() {
  $('#splitMessages').empty();
  var message = $('#message').val(),
      chunkSize = Number($('#chunkSize').val());
  if (chunkSize <= 0) {
    chunkSize = 1;
    $('#chunkSize').val(function(i, old) {
      return chunkSize;
    });
  }
  var messageSegments = chunk(message, chunkSize);

  messageSegments.forEach(function(i) {
    $("#splitMessages")
      .append(
        $('<a target="_blank" class="twitter-share-button" \
              href="https://twitter.com/intent/tweet?text='+i+'">'+' \
                Tweet \
            </a>')
      .append(
        $("<br/><br/>")
      )
      )
      .append(
        $('<div class="messageSegment"/>').text(i)
      )
      .append(
        $("<br/><hr/>")
      );
  });
};

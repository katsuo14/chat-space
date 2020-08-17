$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main-chat__message-list__message-box">
          <div class="main-chat__message-list__message-box__info">
            <div class="main-chat__message-list__message-box__info__user">
              ${message.user_name}
            </div>
            <div class="main-chat__message-list__message-box__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat__message-list__message">
            <p class="main-chat__message-list__message__content">
              ${message.content}
            </p>
            <img class="main-chat__message-list__message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="main-chat__message-list__message-box">
        <div class="main-chat__message-list__message-box__info">
          <div class="main-chat__message-list__message-box__info__user">
            ${message.user_name}
          </div>
          <div class="main-chat__message-list__message-box__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="main-chat__message-list__message">
          <p class="main-chat__message-list__message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $('.main-chat__message-form__form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-chat__message-list').append(html);
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.main-chat__message-form__form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
});
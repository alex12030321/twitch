var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(xhr.status === 200) {
        var data = JSON.parse(xhr.responseText).streams;
        document.querySelector('.container').innerHTML = '';

        for(var i = 0; i < data.length; i++) {
            document.querySelector('.container').innerHTML += '<a href = "' + data[i].channel.url + '" target = "_blank">' +
            '<div class = "channel">' +
            '<img src = "' + data[i].preview.large + '" class = "game_preview">' +
            '<img src = "' + data[i].channel.logo + '" class = "photo">' +
            '<p class = "channel_name">頻道名字：' + data[i].channel.status + '</p><p class = "host_name">實況主名字：' + data[i].channel.display_name + '</p></div></a>';
        }
        document.querySelector('.container').innerHTML += '<div class = "clear"></div>';
    }
}

xhr.open('GET', 'https://api.twitch.tv/kraken/streams/?client_id=4psrf1tas6xo77u1jssxy8ga6rlewo&game=League%20of%20Legends&limit=20');
xhr.send(null);

// setInterval(function() {
//     document.querySelector('.container').innerHTML = '';
//     for(var i = 0; i < 10; i++) {
//         document.querySelector('.container').innerHTML += '<div class="channel">' +
//         '<img src="images/game_preview.jpg" alt="" class = "game_preview">' +
//         '<img src="images/photo.png" alt="" class = "photo">' +
//         '<p class = "channel_name">頻道名稱</p>' +
//         '<p class="host_name">實況主名字</p></div>';
//     }

//     xhr.open('GET', 'https://api.twitch.tv/kraken/streams/?client_id=4psrf1tas6xo77u1jssxy8ga6rlewo&game=League%20of%20Legends&limit=20');
//     xhr.send(null);
// } ,(10000));


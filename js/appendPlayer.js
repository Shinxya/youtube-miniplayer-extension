let body = document.querySelector('body');
let div = document.createElement('div');
div.setAttribute('id', 'player');
div.setAttribute('style', 'display: inline-block; position: fixed; bottom: 10px; right: 10px;');
body.appendChild(div);

let ytIframeAPI = document.createElement('script');
ytIframeAPI.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(ytIframeAPI, firstScriptTag);

const func = function() {
    let player;
    onYouTubeIframeAPIReady = () => {
        player = new YT.Player('player', {
            height: '180',
            width: '320',
            videoId: 'EQ94zflNqn4',
            events: {
                'onReady': onPlayerReady,
            }
        });
    }

    onPlayerReady = (e) => {
        // e.target.playVideo();
    }
}

let ytFuncs = document.createElement('script');
ytFuncs.innerHTML = `(${func.toString()}())`;
body.appendChild(ytFuncs);
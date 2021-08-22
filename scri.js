var participante = false
var pista = document.getElementById('pista')
var progress = document.getElementById('progress')
var titulo = document.getElementById('titulo')
var artista = document.getElementById('artista')
var imagen = document.getElementById('imagen')
var handler = document.getElementById('handler')
var current_track = 0
var cancion, audio, duration
var canciones_html = ''

var canciones = [{
        imagen: './1.jpg',
        titulo: ' Tu No Metes Cabra ',
        artista: 'Bad Bunny Daddy Yankee Anuel  Cosculluela',
        audio: './1.mp3'
    },
    {
        imagen: './m2.jpg',
        titulo: ' Un Ratito Mas   ',
        artista: ' Bryant Myers Feat  Bad Bunny',
        audio: './2.mp3'
    },
    {
        imagen: './3.jpg',
        titulo: ' Escápate Conmigo',
        artista: ' Wisin ft Ozuna ',
        audio: './3.mp3'
    },
    {
        imagen: './4.jpg',
        titulo: ' Angel ',
        artista: 'XXXTENTACION  ',
        audio: './4.mp3'
    },
    {
        imagen: './5.jpg',
        titulo: 'Carry On  ',
        artista: 'XXXTENTACION ',
        audio: './5.mp3'
    },
    {
        imagen: './6.jpg',
        titulo: 'Everybody Dies In Their Nightmares  ',
        artista: ' XXXTENTACION  ',
        audio: './6.mp3'
    },
    {
        imagen: './7.jpg',
        titulo: ' If I Lose You feat Shiloh Dynasty  TYPE BEAT ',
        artista: 'XXXTENTACION ',
        audio: './7.mp3'
    },
    {
        imagen: './8.jpg',
        titulo: 'Save MeSave Me',
        artista: 'XXXTENTACION',
        audio: './8.mp3'
    },
    {
        imagen: './9.jpg',
        titulo: ' Explícale ',
        artista: ' Yandel  ft Bad Bunny',
        audio: './9.mp3'
    },
    {
        imagen: './10.jpg',
        titulo: '  Dusk Till Dawn ',
        artista: 'ZAYN feat Sia  ',
        audio: './10.mp3'
    },
    {
        imagen: './11.jpg',
        titulo: 'Losing Interest ',
        artista: 'Shiloh Dynasty  CuBox  ',
        audio: './11.mp3'
    },
    {
        imagen: './12.jpg',
        titulo: 'Angel by the Wings ',
        artista: 'Sia',
        audio: './12.mp3'
    },
    {
        imagen: './13.jpg',
        titulo: ' Sola  ',
        artista: ' Anuel AA Ft  Daddy Yankee Wisin Farruko Zion Y Lennox',
        audio: './13.mp3'
    },
    {
        imagen: './img/14.jpg',
        titulo: ' SunnYz  Senso ',
        artista: '',
        audio: './14.mp3'
    },
    {
        imagen: './15.jpg',
        titulo: ' Tacos Altos ',
        artista: '',
        audio: './15.mp3'
    },
    {
        imagen: './16.jpg',
        titulo: 'Adicto ',
        artista: 'Tainy Anuel AA Ozuna   ',
        audio: './16.mp3'
    },
    {
        imagen: './17.jpg',
        titulo: 'Closer',
        artista: ' The Chainsmokers   Not So Good  Akki ',
        audio: './17.mp3'
    },
    {
        imagen: './18.jpg',
        titulo: 'the remedy for a broken heart why am I so in love  ',
        artista: '',
        audio: './18.mp3'
    },
    {
        imagen: './19.jpg',
        titulo: ' Amigos y Enemigos ',
        artista: 'Trap Capos Noriel ft Bad Bunny Almighty',
        audio: './19.mp3'
    },
    {
        imagen: './20.jpg',
        titulo: ' Diablita Cover ',
        artista: 'Trap Capos Noriel ft Anuel AA Baby Rasta',
        audio: './20.mp3'
    },
    {
        imagen: './img/21.jpg',
        titulo: ' TREFUEGO  90MH ',
        artista: '',
        audio: './mp/21.mp3'
    },
    {
        imagen: './22.jpg',
        titulo: 'Pure ',
        artista: 'Imagination feat Shiloh Dynasty',
        audio: './22.mp3'
    },
    {
        imagen: './23.jpg',
        titulo: '  No Type  ',
        artista: '- Rae Sremmurd ',
        audio: './23.mp3'
    },
    {
        imagen: './24.jpg',
        titulo: 'Fantasias  ',
        artista: '- Rauw Alejandro Farruko   ',
        audio: './24.mp3'
    },
    {
        imagen: './25.jpg',
        titulo: ' Reloj ',
        artista: 'Rauw Alejandro x Anuel AA  ',
        audio: './25.mp3'
    },
    {
        imagen: './26.jpg',
        titulo: 'Renaissance',
        artista: '',
        audio: './26.mp3'
    },
    {
        imagen: './27.jpg',
        titulo: ' Requiem for a Dream Very Sad Violin ',
        artista: '',
        audio: './27.mp3'
    },
    {
        imagen: './28.jpg',
        titulo: '  Eternal Youth',
        artista: 'RUDE  ',
        audio: './28.mp3'
    },
    {
        imagen: './29.jpg',
        titulo: ' Russ  Losin Control ',
        artista: '',
        audio: './29.mp3'
    },
    {
        imagen: './30.jpg',
        titulo: '  Konshens',
        artista: 'Rvssian  Privado ft Nicky Jam Farruko Arcangel ',
        audio: './mp/30.mp3'
    },
    {
        imagen: './31.jpg',
        titulo: ' Si Tu Lo Dejas ',
        artista: 'Rvssian FT Bad Bunny X Farruko X Nicky Jam X King Kosa',
        audio: './31.mp3'
    },
    {
        imagen: './32.jpg',
        titulo: ' Que Mas Pues',
        artista: 'Sech ft Maluma Nicky J Justin Quiles Dalex Farruko',
        audio: './32.mp3'
    },
    {
        imagen: './33.jpg',
        titulo: ' CÓMO MIRARTE  ',
        artista: 'SEBASTIÁN YATRA ',
        audio: './33.mp3'
    },
    {
        imagen: './34.jpg',
        titulo: ' desconocido ',
        artista: 'desconocido',
        audio: './34.mp3'
    },
    {
        imagen: './35.jpg',
        titulo: ' Amarte por mil años más  ',
        artista: 'desconocido',
        audio: './35.mp3'
    },
    /*{
        imagen: './img/.jpg',
        titulo: '  ',
        artista: '',
        audio: './mp/.mp3'
    },*/
]

$(document).ready(function() {
    $.each(canciones, function(index) {
        canciones_html += '<li class="list-group-item d-flex justify-content-between align-items-center" onclick="CancionSelect(' + index + ')">'
        canciones_html += '<blockquote class="blockquote">'
        canciones_html += '<h5>' + canciones[index].titulo + '</h5>'
        canciones_html += '<footer class="blockquote-footer">' + canciones[index].artista + '</footer>'
        canciones_html += '</blockquote>'
        canciones_html += '<h3><i id="play' + index + '" class="fas fa-play-circle"></i></h3>'
        canciones_html += '</li>'
    })
    $('#contenido').html(canciones_html)
    init()
})

function CancionSelect(id) {
    current_track = id
    cancion = canciones[current_track];
    audio.src = cancion.audio;
    audio.onloadeddata = function() {
        updateInfo();
        $('#play').removeClass('fa-play-circle')
        $('#play').addClass('fa-pause-circle')
        for (var i = 0; i <= canciones.length; i++) {
            $('#play' + i + '').removeClass('fa-pause-circle')
            $('#play' + i + '').addClass('fa-play-circle')
        }
        $('#play' + id + '').removeClass('fa-play-circle')
        $('#play' + id + '').addClass('fa-pause-circle')
        audio.addEventListener('timeupdate', initProgressBar, false);
    }
}

function init() {
    cancion = canciones[current_track]
    audio = new Audio()
    imagen.src = cancion.imagen
    audio.src = cancion.audio
    titulo.textContent = cancion.titulo
    artista.textContent = cancion.artista
}

function playTrack() {
    if ($('#play').hasClass('fa-pause-circle')) {
        $('#play').removeClass('fa-pause-circle')
        $('#play').addClass('fa-play-circle')
        $('#play' + current_track + '').removeClass('fa-pause-circle')
        $('#play' + current_track + '').addClass('fa-play-circle')
        audio.pause()
    } else {
        $('#play').removeClass('fa-play-circle')
        $('#play').addClass('fa-pause-circle')
        $('#play' + current_track + '').removeClass('fa-play-circle')
        $('#play' + current_track + '').addClass('fa-pause-circle')
        audio.play()
        audio.addEventListener('timeupdate', initProgressBar, false);
    }
}

function nextTrack() {
    current_track++;
    current_track = current_track % (canciones.length);
    cancion = canciones[current_track];
    audio.src = cancion.audio;
    audio.onloadeddata = function() {
        $('#play').removeClass('fa-play-circle')
        $('#play').addClass('fa-pause-circle')
        for (var i = 0; i <= canciones.length; i++) {
            $('#play' + i + '').removeClass('fa-pause-circle')
            $('#play' + i + '').addClass('fa-play-circle')
        }
        $('#play' + current_track + '').removeClass('fa-play-circle')
        $('#play' + current_track + '').addClass('fa-pause-circle')
        updateInfo();
    }
}

function prevTrack() {
    current_track--;
    current_track = (current_track == -1 ? (canciones.length - 1) : current_track);
    cancion = canciones[current_track];
    audio.src = cancion.audio;
    audio.onloadeddata = function() {
        $('#play').removeClass('fa-play-circle')
        $('#play').addClass('fa-pause-circle')
        for (var i = 0; i <= canciones.length; i++) {
            $('#play' + i + '').removeClass('fa-pause-circle')
            $('#play' + i + '').addClass('fa-play-circle')
        }
        $('#play' + current_track + '').removeClass('fa-play-circle')
        $('#play' + current_track + '').addClass('fa-pause-circle')
        updateInfo();
    }
}

function updateInfo() {
    titulo.textContent = cancion.titulo;
    artista.textContent = cancion.artista;
    imagen.src = cancion.imagen;
    imagen.onload = function() {
        audio.play();
    }
}

function initProgressBar() {
    var length = audio.duration
    var current_time = audio.currentTime

    var totalLength = calculateTotalValue(length)
    $('#end-time').html(totalLength)

    var currentTime = calculateCurrentValue(current_time)
    $('#start-time').html(currentTime)

    progress.value = (audio.currentTime / audio.duration);
    progress.addEventListener("click", seek);

    function seek(event) {
        var percent = event.offsetX / this.offsetWidth;
        audio.currentTime = percent * audio.duration;
        progress.value = percent / 100;
    }

}

function calculateTotalValue(length) {
    var minutes = Math.floor(length / 60),
        seconds_int = length - minutes * 60,
        seconds_str = seconds_int.toString(),
        seconds = seconds_str.substr(0, 2),
        time = minutes + ':' + seconds

    return time;
}

function calculateCurrentValue(currentTime) {
    var current_hour = parseInt(currentTime / 3600) % 24,
        current_minute = parseInt(currentTime / 60) % 60,
        current_seconds_long = currentTime % 60,
        current_seconds = current_seconds_long.toFixed(),
        current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;
}
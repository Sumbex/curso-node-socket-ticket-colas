var socket = io();

var lbl1 = $('#lblTicket1');
var lbl2 = $('#lblTicket2');
var lbl3 = $('#lblTicket3');
var lbl4 = $('#lblTicket4');

var esc1 = $('#lblEscritorio1');
var esc2 = $('#lblEscritorio2');
var esc3 = $('#lblEscritorio3');
var esc4 = $('#lblEscritorio4');

var lblTicket = [
    lbl1,
    lbl2,
    lbl3,
    lbl4
];
var lblEscritorio = [
    esc1,
    esc2,
    esc3,
    esc4
];


socket.on('estadoActual', function(data) {
    actualizaHtml(data.ultimos4);
});

socket.on('ultimos4', function(data) {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHtml(data.ultimos4);
});

function actualizaHtml(ultimos4) {
    for (var i = 0; i <= ultimos4.length - 1; i++) {
        lblTicket[i].text('Ticket ' + ultimos4[i].numero);
        lblEscritorio[i].text('Escritorio ' + ultimos4[i].escritorio);
    }
}
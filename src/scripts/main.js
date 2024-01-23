AOS.init();

const dataDoEvento = new Date("Apr 29, 2024 19:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual

    const diaEmMilsec = 1000 * 60 * 60 * 24
    const horaEmMilsec = 1000 * 60 * 60
    const minutosEmMilsec = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMilsec)
    //Esta conta equivale a quantos dias faltam até a data marcada 1000 x 60 x 60 x 24 (mil milisegundos x 60 = 1 min x 60 = 1h x 24 = 1 dia) / pela diferença do timeStamp = quantidade de dias até o evento.
    //utilizamos a função Math.floor() para arredondar o dia para inteiro.

    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMilsec) / horaEmMilsec)
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMilsec) / minutosEmMilsec)
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMilsec) / 1000)


    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }

},1000)
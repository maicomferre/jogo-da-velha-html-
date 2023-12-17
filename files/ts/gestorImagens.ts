var images = [
    'files/sondoff.png',
    'files/sondon.png'
];
class Imagem {
    private imagem:HTMLImageElement=new Image();
    private display:boolean=false;
    private insertin:any;


    constructor(imagempath:string)
    {
        this.imagem.src = imagempath;
        this.imagem.onerror = ()=> { console.log("[GestorImagens][class][Imagem]: error, cant load image ", imagempath) }; 
    }

    append(element:HTMLElement | null,andshow=false)
    {
        element?.append(this.imagem);
    }

}

var imagem:Imagem[] = [new Imagem(images[0]), new Imagem(images[1])];

function alternarsom() {
    let imgsom = document.getElementById('imgsom');
    let s = soundoff ? 1 : 0;
    if (soundoff){
        imagem[0].append(imgsom);
        som.desativarSom();
    }else{
        som.ativarSom();
        imagem[1].append(imgsom);
    }
}

class Palmeiras{
    private mundial: boolean

    constructor(){
        this.setMundial(false)
    }

    getMundial(): boolean{
        return this.mundial;
    }

    setMundial(mundial: boolean): void{
        this.mundial = mundial
    }
}

export default Palmeiras
class Matrix {

     _row: number;
     _column: number;
    _elements:number[][];

    constructor(_row: number, _column: number) {
        this._row = _row;
        this._column = _column;
        this._elements = [];
        for(var i: number = 0; i < _row; i++) {
            this._elements[i] = [];
            for(var j: number = 0; j< _column; j++) {
                this._elements[i][j] = 0;
            }
        }
    }

    public get row(){
        return this._row;
    }
    public get column(){
        return this._column;
    }

    public  setElement(i:number,j:number,value:number){
        this._elements[i][j] = value;
    }

    public add(M:Matrix){
        if(this._column == M._column && this._row == M._row){
            for(var i: number = 0; i < this._row; i++) {
                for(var j: number = 0; j< this._column; j++) {
                    this._elements[i][j] += M._elements[i][j];
                }
            }
        }else{
            console.log('NOOP');
        }
    }
    public multiply(M:Matrix){
        let sum = 0;
        const Mresult = new Matrix(this.column, M._row);
        if(this._row == M._column ){
            console.log('Ok');
            for(let k:number = 0; k<M._row;k++ ){
                for(let i: number = 0; i < this._row; i++) {
                    for(let j: number = 0; j< this._column; j++) {
                        let value = this._elements[i][j] * M._elements[k][j] + Mresult._elements[j][k];
                        Mresult.setElement(j,k,value);
                    }
                }
            }
            this._row = Mresult.row;
            this._column = Mresult.column;
            this._elements = Mresult._elements;
        }else{
            console.log('NOOP'); 
        }
    }

}

const m1 = new Matrix(2,2);
m1.setElement(1,1,10);
const m2 = new Matrix(2,2);
m2.setElement(1,0,10);
m1.add(m2);
const m3 = new Matrix(2,2);
const m4 = new Matrix(1,2);
m3.setElement(0,0,1);
m3.setElement(0,1,2);
m3.setElement(1,0,3);
m3.setElement(1,1,4);
m4.setElement(0,0,1);
m4.setElement(0,1,2);
m3.multiply(m4);
console.log(m3)



"use strict";
class Matrix {
    constructor(_row, _column) {
        this._row = _row;
        this._column = _column;
        this._elements = [];
        for (var i = 0; i < _row; i++) {
            this._elements[i] = [];
            for (var j = 0; j < _column; j++) {
                this._elements[i][j] = 0;
            }
        }
    }
    get row() {
        return this._row;
    }
    get column() {
        return this._column;
    }
    setElement(i, j, value) {
        if (i < this._row && j < this._column) {
            this._elements[i][j] = value;
        }
        else {
            console.log('Out of the matrix range');
        }
    }
    add(M) {
        if (this._column == M._column && this._row == M._row) {
            for (var i = 0; i < this._row; i++) {
                for (var j = 0; j < this._column; j++) {
                    this._elements[i][j] += M._elements[i][j];
                }
            }
        }
        else {
            console.log('NOOP');
        }
    }
    multiply(M) {
        let sum = 0;
        const Mresult = new Matrix(this._row, M._column);
        if (this._column == M._row) {
            console.log('SIP'); //I add this just for show something in my example
            for (let k = 0; k < M._column; k++) {
                for (let i = 0; i < this._row; i++) {
                    let value = 0;
                    for (let j = 0; j < this._column; j++) {
                        value += this._elements[i][j] * M._elements[j][k];
                    }
                    Mresult.setElement(i, k, value);
                }
            }
            this._row = Mresult.row;
            this._column = Mresult.column;
            this._elements = [];
            this._elements = Mresult._elements;
        }
        else {
            console.log('NOOP');
        }
    }
}
//Create a matrix
const m1 = new Matrix(2, 2);
//Setting a value in (i,j)
m1.setElement(0, 1, 10);
const m2 = new Matrix(2, 2);
const m5 = new Matrix(2, 1);
m2.setElement(1, 0, 10);
//Adding 2 matrices
m1.add(m2);
console.log('Adding: ', m1);
console.log('Adding matrices with dif...dimentions:');
m1.add(m5);
m1.setElement(0, 0, 1);
m1.setElement(0, 1, 2);
m1.setElement(1, 0, 3);
m1.setElement(1, 1, 4);
m5.setElement(0, 0, 1);
m5.setElement(1, 0, 2);
console.log('*******MULTIPLY**********');
//Multiply
m1.multiply(m5);
console.log('EX1 result: ', m1);
const m3 = new Matrix(3, 3);
const m4 = new Matrix(3, 2);
m3.setElement(0, 0, 3);
m3.setElement(0, 1, 2);
m3.setElement(0, 2, 1);
m3.setElement(1, 0, 1);
m3.setElement(1, 1, 1);
m3.setElement(1, 2, 3);
m3.setElement(2, 0, 0);
m3.setElement(2, 1, 2);
m3.setElement(2, 2, 1);
m4.setElement(0, 0, 2);
m4.setElement(0, 1, 1);
m4.setElement(1, 0, 1);
m4.setElement(1, 1, 0);
m4.setElement(2, 0, 3);
m4.setElement(2, 1, 2);
m3.multiply(m4);
console.log('EX2 result: ', m3);
// Example 3
//It is posible m3*m1 but not m1*m3 for the dimentions
m3.multiply(m1); //SIP
m1.multiply(m3); //NOOP

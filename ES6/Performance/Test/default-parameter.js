let defaultParameterCount = 1000000;

let es5API = {
  methodA: function(b1, b2, b3, b4, b5, c1, c2, c3, c4, c5) {
      let a1 = arguments[10] !== undefined ? arguments[10] : 1;
      let a2 = arguments[11] !== undefined ? arguments[11] : 2;
      let a3 = arguments[12] !== undefined ? arguments[12] : 3;
      let a4 = arguments[13] !== undefined ? arguments[13] : 4;
      let a5 = arguments[14] !== undefined ? arguments[14] : 5;
      let numB = es5API.methodB(b1, b2, b3, b4, b5);
      let numC = es5API.methodC(c1, c2, c3, c4, c5);
      return numB + numC;
  },
  methodB: function(b1, b2, b3, b4, b5) {
      let b6 = arguments[5] !== undefined ? arguments[5] : 6;
      let b7 = arguments[6] !== undefined ? arguments[6] : 7;
      let b8 = arguments[7] !== undefined ? arguments[7] : 8;
      let b9 = arguments[8] !== undefined ? arguments[8] : 9;
      let b10 = arguments[9] !== undefined ? arguments[9] : 10;
      return b1 + b2 + b3 + b4 + b5;
  },
  methodC: function(c1, c2, c3, c4, c5) {
      let c6 = arguments[5] !== undefined ? arguments[5] : 6;
      let c7 = arguments[6] !== undefined ? arguments[6] : 7;
      let c8 = arguments[7] !== undefined ? arguments[7] : 8;
      let c9 = arguments[8] !== undefined ? arguments[8] : 9;
      let c10 = arguments[9] !== undefined ? arguments[9] : 10;
      return c1 + c2 + c3 + c4 + c5;
  }
};

let es6API = {
    methodA: function(b1, b2, b3, b4, b5, c1, c2, c3, c4, c5, a1 = 1, a2 = 2, a3 = 3, a4 = 4, a5 = 5) {
        let numB = es6API.methodB(b1, b2, b3, b4, b5);
        let numC = es6API.methodC(c1, c2, c3, c4, c5);
        return numB + numC;
    },

    methodB: function(b1, b2, b3, b4, b5, b6 = 6, b7 = 7, b8 = 8, b9 = 9, b10 = 10){
        return b1 + b2 + b3 + b4 + b5;
    },

    methodC: function(c1, c2, c3, c4, c5, c6 = 6, c7 = 7, c8 = 8, c9 = 9, c10 = 10){
        return c1 + c2 + c3 + c4 + c5;
    }
};

function testES5DefaultParameter(){
    testES5(function(){
        for(var i = 0; i < defaultParameterCount; i++){
            es5API.methodA(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        }
    })
}

function testES6DefaultParameter(){
    testES6(function(){
        for(var i = 0; i < defaultParameterCount; i++){
            es6API.methodA(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        }
    })
}
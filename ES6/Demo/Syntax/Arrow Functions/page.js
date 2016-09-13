function Ex1(){
    let foo = (x, y) => x + y;
    
    console.log(`Example 1:`);
    console.log( foo(1, 3) );  // 4
}

function Ex2(){
    let f1 = () => 12;
    let f2 = x => x * 2;
    let f3 = (x, y) => {
        let z = x * 2 + y;
        y++;
        x *= 3;
        return (x + y + z) / 2;
    };
    
    console.log(`Example 2:`);
    console.log(`f1: ${ f1() }`); //12
    console.log(`f2: ${ f2(1) }`); // 2
    console.log(`f3: ${ f3(1, 2) }`); //5
}

function Ex3() {
    var a = [1, 2, 3, 4, 5];
    a = a.map( v => v * 2 );
    
    console.log(`Example 3:`);
    console.log( a ); // [2,4,6,8,10]
}

function Ex4() {
    let formatDollar = (strings, ... values) =>
            strings.reduce( (previousValue, currentValue, currentIndex) => {
                if (currentIndex > 0) {
                    if (typeof values[currentIndex- 1] == "number" ) {
                        // look, also using interpolated
                        // string literals!
                        previousValue += `$${values[currentIndex- 1].toFixed(2)}` ;
                    }
                    else {
                        previousValue += values[currentIndex- 1];
                    }
                }
                return previousValue + currentValue;
            }, "");
    var amt1 = 11.99, amt2 = amt1 * 1.08, name = "Walter" ;
    var text = formatDollar
    `Thanks for your purchase, ${name}! Your
    product cost was ${amt1}, which with tax
    comes out to ${amt2}.`
    
    console.log(`Example 4:`);
    console. log( text );
    // Thanks for your purchase, Walter! Your
    // product cost was $11.99, which with tax
    // comes out to $12.95.
}

function Ex5(){
    let controller = {
        a: 2,
        makeRequest: () => {
            //inherited from Ex5 function
            console.log(this); //Window     
            console.log(this.a);
        },
        getHelper: function () {
            console.log(this); //Object
            console.log(this.a);
        }
    };
    
    console.log(`Example 5:`);
    controller.makeRequest();
    controller.getHelper();
}

function Ex6(){
    let controller = {
        makeRequest: () => {
            let f = () => console.log(this); //Window
            f();
        },
        getHelper: function () {
            let f = () => console.log(this); //Object
            f();
        }
    };
    
    console.log(`Example 6:`);
    controller.makeRequest();
    controller.getHelper();
}

function Ex7(){
    let adder = {
        base : 1,      
        add : function(a) {
            let f = v => v + this.base;
            return f(a);
        },
        addThruCall: function(a) {
            let f = v => v + this.base;
            let b = {
                base : 2
            };
                    
            return f.call(b, a);
            //return f.apply(b, [a]);
        }
    };

    console.log(`Example 7:`);
    console.log(adder.add(1));         // This would log to 2
    console.log(adder.addThruCall(1)); // This would log to 2 still
}

function Ex8(){
    let foo = function () {
        let f = (i) => arguments[0]+i; // foo's implicit arguments binding
        return f(2);
    }
    
    console.log(`Example 8:`);
    console.log(foo(1, 2, 3)); // 3
}

function Ex9(){
    function Person(){
        this.age = 0;

        setInterval(() => {
            console.log(this);
            this.age++; // |this| properly refers to the person object
        }, 1000);
    }
    
    console.log(`Example 9:`);
    let p = new Person();
}

function Ex10(){
    let btn = document.getElementById("btn");
    let es5Controller = {
        makeRequest: function () {
            console.log("es5Controller");
            var self = this;
            
            btn.addEventListener("click" , function(){
                console.log("click button");
                self.makeRequest();
            }, false );
        }
    };
    
    let es6Controller = {
        makeRequest: function () {
            console.log("es6Controller");
            
            btn.addEventListener("click" , () => {
                console.log("click button");
                this.makeRequest();
            }, false );
        }
    };
    
    console.log(`Example 10:`);
    //es5Controller.makeRequest();
    es6Controller.makeRequest();
}
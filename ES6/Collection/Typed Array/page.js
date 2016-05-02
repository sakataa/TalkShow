function Ex1(){
    var littleEndian = (function() {
        var buffer = new ArrayBuffer( 2 );
        new DataView( buffer ).setInt16( 0, 256, true );
        return new Int16Array(buffer)[0] === 256;
    })();
    
    console.log(littleEndian);
}

function Ex2(){
    var buf = new ArrayBuffer( 2 );
    var view8 = new Uint8Array( buf );
    var view16 = new Uint16Array( buf );
    view16[0] = 3085;
    
    console.log(view16[0]);
    console.log(view8);
    console.log(view16);
    
    console.log(view8[0]);  // 13
    console.log(view8[1]);  // 12
    console.log(view8[0].toString( 16 ));  // "d"
    console.log(view8[1].toString( 16 ));  // "c"
    
    // swap (as if endian!)
    var tmp = view8[0];
    view8[0] = view8[1];
    view8[1] = tmp;
    
    console.log(view16[0]);  // 3340
    console.log(view8);
    console.log(view16);
}

function Ex3(){
    var file = document.getElementById('fileInput').files[0];
    if(file){
        let reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function () {
            let buffer = reader.result;
            console.log("Buffer length\n", buffer.byteLength);
            
            let dataView = new DataView(buffer);
            console.log("Data view\n", dataView);
            
            let array8 = new Uint8Array(buffer);
            console.log("Uint8Array\n", array8);
            
            let array16 = new Uint16Array(buffer);
            console.log("Uint16Array\n", array16);
            
            let array32 = new Uint32Array(buffer);
            console.log("Uint32Array\n", array32);
        };
    }
}
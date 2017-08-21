function main(){
    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);
    if(!gl){
        console.log("No cntext available");
        return;
    }
    gl.clearColor(1.0,0.5,0.5,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

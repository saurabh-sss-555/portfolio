function print1(this){
    this.addEventListener('mouseover',()=>{
        switch(this.id.toString()){
            case 'c':document.getElementById('c1').textContent="C";
                        break;
            case 'cpp':document.getElementById('cpp1').textContent="C++";
                        break;
            case 'java':document.getElementById('java1').textContent="Java";
                        break;
            case 'python':document.getElementById('python1').textContent="Python";
                        break;
            case 'html':document.getElementById('html1').textContent="HTML";
                        break;
            case 'css':document.getElementById('css1').textContent="CSS";
                        break;
            case 'js':document.getElementById('js1').textContent="JavaScript";
                        break;
            case 'node':document.getElementById('node1').textContent="Node";
                        break;
            case 'figma':document.getElementById('figma1').textContent="Figma";
                        break;
            case 'mongo':document.getElementById('mongo1').textContent="MongoDB";
                        break;
                        
        }
    })
}
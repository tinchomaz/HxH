function ingreso(){
    if ((document.form.usuario.value=="Enduin" && document.form.contra.value==20030)|| (document.form.usuario.value=="Percyval" && document.form.contra.value==20031) || (document.form.usuario.value=="Wax" && document.form.contra.value==20000))
    alert("Acceso denegado: Usuario en investigacion por acciones ilicitas");
    else if( ((document.form.usuario.value= "Vincent") || (document.form.usuario.value="vincent")) && document.form.contra.value==20001){
        window.location.replace("https://tinchomaz.github.io/HxH/lib/HTML/inicio.html")
    }
else{alert("datos incorrectos")}}
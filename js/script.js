var tabla1 = new Array();
tabla1[0] = new Array(0,1,2,3,4,5);
tabla1[1] = new Array(null,null,"Ayuntamiento","Polideportivo","Instituto","Mercado","Colegio");
tabla1[2] = new Array(1,"PV");
tabla1[3] = new Array(2,"OV");
tabla1[4] = new Array(3,"VpSi");
tabla1[5] = new Array(4,"UPV");

function rellenar(tabla){
    for(var i=2;i<=5;i++){
        for (var j = 2; j<=6; j++){
            tabla[i][j]=Math.round(Math.random()*5+5);
        }
    }
}

function contarPartidos(tabla){
    var cuenta=0;
    for(var i=2;i<=5;i++){
        for (var j = 2; j<=5; j++){
            cuenta += tabla[i][j]
        }
        console.log("El voto total de "+tabla[i][1]+ " = "+cuenta);
        cuenta=0;
    }
}
function contarSedes(tabla){
    var cuenta=0;
    for(var i=2;i<=6;i++){
        for (var j = 2; j<=5; j++){
            cuenta += tabla[j][i]
        }
        console.log("El voto total de "+tabla[1][i]+ " = "+cuenta);
        cuenta=0;
    }
}
rellenar(tabla1);
console.log(tabla1);
contarPartidos(tabla1);
contarSedes(tabla1);
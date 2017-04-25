var app = angular.module("app", []);

app.constant("titulo","Historial Medico");

app.controller("cabeceraController", ["$scope","titulo",function cabeceraController(a,titulo){
    a.titulo=titulo;    
}]);

app.controller("SeguroController", ["$scope", "$log", "$http","$timeout", function SeguroController(a, b, c,d) {
        
        c({
           method:"GET",
           url:"datos.json"
        }).success(function(data,status,headers,config){
            a.seguro=data;
        }).error(function(data,status,headers,config){
            alert("Ha fallado la peticion. Estado de HTTP: " + status);
        });
        
        d(function (){
            c({
           method:"GET",
           url:"datoss.json"
        }).success(function(data,status,headers,config){
            a.seguro=data;
        }).error(function(data,status,headers,config){
            alert("Ha fallado la peticion. Estado de HTTP: " + status);
        });
        },3000);

        b.debug("$scope creado.");

    }]);
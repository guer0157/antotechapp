/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

let app = {
    init: function () {
        let ingresar = document.getElementById("ingresar");
        ingresar.addEventListener('click', app.buildNav);
    },
    buildNav: function () {
        let home = document.getElementById("home");
        home.classList.remove("active");
        let programadores=document.getElementById("programadores").classList.remove("active");
        let main = document.getElementById("main");
        main.classList.add("active");
        console.log(main);

        let calendariobtn = document.getElementById('calendario');
        calendariobtn.addEventListener('click', app.selectPage);
        let productsbtn = document.getElementById('productos');
        productsbtn.addEventListener('click', app.selectPage)
    },
    selectPage: function (ev) {
        let elementClicked = ev.currentTarget.getAttribute("id");
        let elementCleared = ev.currentTarget.getAttribute("data");
        console.log(elementCleared)
        let clearMain=document.getElementById("main").classList.remove("active")
        switch (elementClicked) {
            case "productos":
                clearMain
                document.getElementById("programadores").classList.add("active")
                app.buildProductPage();
                break;
            case "calendario":
                clearMain
                document.getElementById("eventos").classList.add("active")
                app.buildCalendar(ev);
                break;
            case "contactanos":
                clearMain
                document.getElementById("contactanos").classList.add("active");
                break;
            case "back_btn":
                document.getElementById(elementCleared).classList.remove("active");
                document.getElementById("main").classList.add("active");
                break;
        }
    },
    buildProductPage: function (ev) {

        let programadores = productos.Programadores;
        let programadoresHome = document.getElementById("programadores");
        let progid= programadoresHome.getAttribute("id");
        let df = new DocumentFragment;
        programadores.forEach(programador => {
            let card = document.createElement("div");
            card.classList.add("card");
            let progName = programador.Nombre;
            let name = document.createElement('h1');
            name.setAttribute("id","list_title");
            name.textContent = progName;
            let encabezado = document.createElement('p');
            encabezado.setAttribute("id","encabezado");
            let progEncabezado = programador.Encabezado;
            encabezado.innerHTML = `<strong>${progEncabezado}<strong>`;
            let descripcion = document.createElement("p");
            descripcion.textContent = programador.Descripcion;
            card.appendChild(name);
            card.appendChild(encabezado);
            card.appendChild(descripcion);
            df.appendChild(card);
        })
        programadoresHome.appendChild(df);
        
        let body=document.querySelector("body");
        let overlay=document.createElement("div");
            overlay.classList.add("overlay");
        let overlayCard=document.createElement("div");
            overlayCard.classList.add("card");
            overlay.appendChild(overlayCard);
        let overlayMsg=document.createElement("p");
            overlayMsg.setAttribute("id", "overlayMsgs");
            overlayMsg.innerHTML="<strong>Producto Destacado<strong>";
            overlayCard.appendChild(overlayMsg);
        let overlayPic=document.createElement('img');
            overlayPic.src="./img/t-300.png";
            overlayCard.appendChild(overlayPic);
            body.appendChild(overlay);
        
        setTimeout(function(){
        let nav_bar=document.getElementById("clear");
        nav_bar.removeAttribute('id');
        let back_home=document.getElementById("back_btn");
        back_home.setAttribute("data", progid);
        back_home.addEventListener("click", app.backHome);
        body.removeChild(overlay);
        },3000)     
    },
    buildCalendar: function(ev){
        let progid=document.getElementById('eventos').getAttribute('id');
        let headerShow=document.getElementById('clear');
        headerShow.removeAttribute('id');
        let backhome=document.getElementById('back_btn')
        backhome.setAttribute('data', progid);
        backhome.addEventListener('click', app.backHome);
        let events= document.querySelectorAll()
    },
    backHome:function(ev){
        console.log(ev.currentTarget);
        document.querySelector(".bar-half.top").setAttribute('id',"clear");
        app.selectPage(ev);
    } 
         console.log("this");                                                                                                                                                                                                                            
    
};
let ready = ('deviceready' in document) ? 'deviceready' : 'DOMContentLoaded';
document.addEventListener(ready, app.init);
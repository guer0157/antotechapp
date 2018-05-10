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
    buildNav: function (ev) {
        
        let home = document.getElementById("home");
        home.classList.remove("active");
        let main = document.getElementById("main");
        main.classList.add("active");
        console.log(main);

        let calendariobtn = document.getElementById('calendario');
        calendariobtn.addEventListener('click', app.clearPage);
        let productsbtn = document.getElementById('productos');
        productsbtn.addEventListener('click', app.clearPage)
    },
    clearPage: function (ev) {
        let elementClicked = ev.currentTarget.getAttribute("id");

        switch (elementClicked) {
            case "productos":
                document.getElementById("main").classList.remove("active")
                document.getElementById("programadores").classList.add("active")
                app.buildProductPage()
                break;
            case "calendario":
                document.getElementById("main").classList.remove("active")
                document.getElementById("eventos").classList.add("active")
                break;

        }
    },
    buildProductPage: function () {
        
        let programadores = productos.Programadores;
        let programadoresHome = document.getElementById("programadores");
        let df = new DocumentFragment;
        programadores.forEach(programador => {
            let card = document.createElement("div");
            card.classList.add("card");
            let progName = programador.Nombre;
            let name = document.createElement('h1');
            name.textContent = progName;
            let encabezado = document.createElement('h3');
            let progEncabezado = programador.Encabezado;
            encabezado.textContent = progEncabezado;
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
        let header=document.createElement("header");
            body.prepend(header);
        header.classList.add("bar");
        header.classList.add("top");
            body.removeChild(overlay);
        },3000)
    }
};
let ready = ('deviceready' in document) ? 'deviceready' : 'DOMContentLoaded';
document.addEventListener(ready, app.init);
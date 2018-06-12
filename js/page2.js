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
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);



        document.getElementById("btnAdd").onclick = function() {
            add("text");
        };

        function add(type) {
            //Create an input type dynamically.
            var element = document.createElement("input");
            //Assign different attributes to the element.
            element.type = type;
            element.value = type; // Really? You want the default value to be the type string?
            element.name = type; // And the name too?
            element.onclick = function() { // Note this is a function
                alert("blabla");
            };

            var foo = document.getElementById("fooBar");
            //Append the element in page (in span).
            foo.appendChild(element);
        }


    },



    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        document.getElementById("fnamelab").innerHTML=sessionStorage.getItem("fname");

        console.log('Received Event: ' + id);
    }


};

app.initialize();
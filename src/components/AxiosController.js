// import axios from 'axios';
// import React, { useEffect, useState, Component, setState } from "react";

// const [data, setData] = useState([]);
//   var datas =[]
//   var targets =[]
//   //const [targets, setTarget] = useState([]);

//   const [status, setStatus] = useState("");

//   const createTarget = (event) => {
//     // Prevent default behavior
//     event.preventDefault();

//     const data = new FormData(event.target);
//     // Access FormData fields with `data.get(fieldName)`
//     // For example, converting to upper case
//       console.log("Datas - " + data.get('image_name') ," - " + data.get('author')," - " + data.get('image'));
//       axios({
//           method: 'post',
//           url: 'localhost:3000/AxiosController/createTarget',
//           data: {
//             author: data.get('author'),
//             name: data.get('image_name'),
//             image: data.get('image')
//           },
//           responseType: 'json'
//         })
//           .then(function (res) {
//             console.log(res);
//             // let details = [];

//             //   for (var i = 0; i < Object.keys(res.data.message).length; i++) {
//             //       details.push({ name: i, value: res.data.message[i] })
//             //   }
//             //   console.log("fjhdhfjdhfj" + i);
//             //   console.log(datas);
//             //   //setDatas(details);
//             //   setData(details)
//           });
          
//     }

//     // const [data, setData] = useState([]);
//     var datas =[]
//     const [target, setTarget] = useState([]);
//     //const [targets, setTarget] = useState([]);

//     // const [status, setStatus] = useState("");

//     const getAllTargets = () => {
//         console.log("wTF dasdadad")
//         axios({
//             method: 'get',
//             url: 'https://skem-api.vercel.app/api/getAllTargets',
//             responseType: 'json'
//           })
//             .then(function (res) { 
//               console.log(res);
//               let details = [];
    
//                 for (var i = 0; i < Object.keys(res.data.message).length; i++) {
//                     details.push({ name: i, value: res.data.message[i] })
//                 }
//                 console.log("This is get All targets # of datas - " + i);
//                 //setDatas(details);
//                 setData(details)
//             });
            
//       }

    
//     const deleteTarget = (id) => {
//         // axios.delete('https://skem-api.vercel.app/api/deleteTarget/')
//         //     .then(() => setStatus('Delete successful'));
//         axios({
//             method: 'post',
//             url: 'https://skem-api.vercel.app/api/deleteTarget/',
//             data: {
//                 target: id
//             },
//             responseType: 'json'
//         }).then(function (res){
//             console.log(res);
//             setStatus('Delete successful');
//             console.log(status);
//         });
//         console.log("This is the delete function" + id);
//     }

//     const updateTarget = (id) => {
//         // axios.put('https://skem-api.vercel.app/api/updateTarget/')
//         //     .then(() => setStatus('Ipdate successful'));
        
//             axios({
//                 method: 'post',
//                 url: 'localhost:3000/AxiosController/updateTarget',
//                 data: {
//                   author: data.get('author'),
//                   name: data.get('image_name'),
//                   image: data.get('image')
//                 },
//                 responseType: 'json'
//               })
//                 .then(function (res) {
//                   console.log(res);
//                   // let details = [];
      
//                   //   for (var i = 0; i < Object.keys(res.data.message).length; i++) {
//                   //       details.push({ name: i, value: res.data.message[i] })
//                   //   }
//                   //   console.log("fjhdhfjdhfj" + i);
//                   //   console.log(datas);
//                   //   //setDatas(details);
//                   //   setData(details)
//                 });
//     }

//     const getTarget = (id) => {
//         console.log("This is the ID " + id);
//         handleShow();
//         axios({
//             method: 'post',
//             url: 'https://skem-api.vercel.app/api/getOneTarget',
//             data: {
//                     target: id
//                 },
//             responseType: 'json'
//           })
//             .then(function (res) {
//               console.log(res);
//               let details = [];
    
//                 for (var i = 0; i < Object.keys(res.data.message).length; i++) {
//                     details.push({ name: i, value: res.data.message[i] })
//                 }
//                 console.log("fjhdhfjdhfj" + i);
//                 console.log(details);
//                 setTarget(details);
//             });
//     }

//     module.exports = {
//         getTarget,
//         getAllTargets,
//         createTarget,
//         updateTarget,
//         deleteTarget
//     }

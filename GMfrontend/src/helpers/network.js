import { getToken , userInfo} from "./authentication";
import axios from 'axios';


function loginRequest({ email, password }) {
  console.log(JSON.stringify({
    email,
    password
  }));
  return new Promise((resolve, reject) => {
    fetch("https://green-monitor123.herokuapp.com/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => {
        response
          .json()
          .then(json => {
            if (!response.ok) {
              return reject(json);
            }
            resolve(json);
          })
          .catch(e => reject(e));
      })
      .catch(e => reject(e));
  });
}

function registerRequest({ name,email, password }) {
  return new Promise((resolve, reject) => {
    fetch("https://green-monitor123.herokuapp.com/users/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then(response => {
        response
          .json()
          .then(json => {
            if (!response.ok) {
              return reject(json);
            }
            resolve(json);
          })
          .catch(e => reject(e));
      })
      .catch(e => reject(e));
  });
}

function getDashboard() {
  return new Promise((resolve, reject) => {
    fetch("https://green-monitor123.herokuapp.com/dashboard", {
      headers: {
        Authorization: getToken()
      }
    })
      .then(response => {
        if (!response.ok) {
          reject(new Error("Unathorized"));
          return;
        }
        response
          .json()
          .then(json => {
            resolve(json.data);
          })
          .catch(e => reject(e));
      })
      .catch(err => reject(err));
  });
}

function getDevices() {
   const user= {
      userId: userInfo().userId
 }
//  console.log(JSON.stringify({
//   user }));
  return (
    //  new Promise((resolve, reject) => {
      axios
     .get('https://green-monitor123.herokuapp.com/device/get-devices',{  headers: {'Authorization': getToken(), 'Access-Control-Allow-Headers':''}})
     .then(res => {
       return res.data.filter(function(item){ return item.userId===user.userId});
     })
     .catch(e =>console.log(e))
    );
}


      // .catch(err => reject(err));
  // });


export { loginRequest, getDashboard, registerRequest,getDevices };

const API = "http://localhost:8000/api"
// const API = "https://leafbusinessapi.pamsar.com:8000/api"

export {API} 

export const createUser = async (data) => {

    const url = `${API}/signup`;
  
   try {
          const resp = await fetch(url, {
            method: 'POST',
            headers: {
                // "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },        
              body: JSON.stringify(data)
          })
          const json = await resp.json();
          return json;
      
    }catch (e) {  
       throw new Error(e.message);  
     }
  }

  export const loginUser = async (data) => {

    const url = `${API}/login`;
  
   try {
          const resp = await fetch(url, {
            method: 'POST',
            headers: {
                // "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },        
              body: JSON.stringify(data)
          })
          const json = await resp.json();
          return json;
      
    }catch (e) {  
       throw new Error(e.message);  
     }
  }

  export const searchByBusiness = async (data) => {

    const url = `${API}/search-business`;
  
   try {
          const resp = await fetch(url, {
            method: 'POST',
            headers: {
                // "x-access-token": JSON.parse(localStorage.getItem("user-info")).token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },        
              body: JSON.stringify(data)
          })
          const json = await resp.json();
          return json;
      
    }catch (e) {  
       throw new Error(e.message);  
     }
  }
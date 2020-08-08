export default API = {
    fetchData: async (params) => {
        try {
            const response = await fetch(`https://api.elbaayu.xyz/api-mobile`+params, {
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                },
            });
            const data = await response.json();
    
            return data;
        } catch (error) {
            console.log(error);
        } 
    },
    postData: async (params, bodyReq) => {
        try {
            const response = await fetch(`https://api.elbaayu.xyz/api-mobile`+params, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                },
                body: JSON.stringify(bodyReq)
            });

            const data = await response.json();
    
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    deleteData: async (params, bodyReq) => {
        try {
            const response = await fetch(`https://api.elbaayu.xyz/api-mobile`+params, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                },
                body: JSON.stringify(bodyReq)
            });

            const data = await response.json();
    
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    deleteAdmin: async (params) => {
        try {
            const response = await fetch(`https://api.elbaayu.xyz/api-mobile`+params, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            });

            const data = await response.json();
    
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}
const serverConnector = new Promise ((resolve,reject) => {({url,payload,successMessage,failMessage}) =>{
    const loginPromise = new Promise((resolveToast,rejectToast) => {axios.post(url, {
        username,
        password
      })
      .then(function (response) {
        localStorage.setItem('authToken',response.data)
        resolveToast(successMessage);
        navigate('/home'); 
      })
      .catch(function (error) {
        rejectToast(error.response.data);
      });})
      toast.promise(loginPromise, {
        loading: 'Logging in...',
        success: loginPromise.then(res=>{return res}),
        error: loginPromise.catch(err=>{return err}),
      })
}})
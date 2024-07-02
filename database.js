class database{
    //thuc hien them doi tuong
    async them(userApi, object) {
        await  axios.post(userApi, object )
                .then(function (response) {
                  console.log('POST Response:', response.data);
                })
                .catch(function (error) {
                  //Handle error
                  console.error('POST Error:', error);
                }); 
            }



    async doc(courseApi) {
        return await axios.get(courseApi)
        .then(function(response) {
        return response.data ;
      })
      .catch(function (error){
        console.error('GET Error:', error);
      })
    }


}
      



const routes = (app) =>{

    app.route('/contact')
    .get((req,res) =>
     res.send('get request successful.'))

     .post((req,res) =>
     res.send('post request successful.'))

     app.route('/contact/:contactId')
     .put((req,res) =>
      res.send('PUT request successful.'))
 
      .delete((req,res) =>
      res.send('delete request successful.'))


}

export default routes
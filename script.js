
function buscar() {
  axios.get("http://localhost:5053/api/Home/Todos")
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = function(connection) {

  function foo() {
    connection.query(...)
  }
  
  return  {
    foo : foo
  }

}
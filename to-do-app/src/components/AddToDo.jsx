function AddToDo(){
    return <div className="container text-center">
    <div class="row my-row">
    <div class="col-6">
      <input type="text" placeholder="enter task"/>
    </div>
    <div class="col-4">
      <input type="date" />
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-success my-btn">Add</button>
    </div>
  </div>
  </div>
}
export default AddToDo;
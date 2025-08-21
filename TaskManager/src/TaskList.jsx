import React from "react";
import ReactDOM from "react-dom";

export default class TaskList extends React.Component{
render(){
    return<>
    <div className="container bg-dark p-5 mt-5 text-white">
    {
        this.props.tasks.length==0?(<h1>There is no task</h1>

        ):(
        <table className="table table-striped">
<thead>
<tr><th>Sr.No</th>
    <th>Task Name</th>
    <th>Delete</th>
    <th>Update</th>
</tr>
</thead>
<tbody>
    {
          this.props.tasks.map((item,index)=>(
<tr>
<td>{(index+1)}</td>
<td>{item}</td>
<td><button>DELETE</button></td>
<td><button>UPDATE</button></td>

</tr>
          ))}
</tbody>
 </table>
          )}
    </div>
    </>
}

}
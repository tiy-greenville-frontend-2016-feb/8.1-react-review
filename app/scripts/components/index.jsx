var React = require('react');
var ReactDOM = require('react-dom');


var AppComponent = React.createClass({
  getInitialState: function(){
    return {'total': 0}
  },
  addItemToOrder: function(item){
    var newTotal = item.get('price') + this.state.total;
    this.setState({'total': newTotal});
  },
  render: function(){
    var collection = this.props.collection;
    var theCategories = collection.pluck('category');

    var categories = theCategories.map(function(category){
      var categoryCollection = collection.where({'Category': category});
      return <MenuCategory key={category} addItemToOrder={this.addItemToOrder} categoryName={category} collection={categoryCollection}/>
    }.bind(this));

    return (
      <div>
        {categories}
      </div>
    )
  }
});

var MenuCategory = React.createClass({
  render: function(){

    var menuItems = this.props.collection.map(function(item){
      return <MenuItem key={item.cid} model={item} addItemToOrder={this.props.addItemToOrder}/>
    }.bind(this));

    return (
      <div>

        <div class="panel-heading" role="tab" id="collapseListGroupHeading1">
          <h4 class="panel-title">
            <a class="" role="button" data-toggle="collapse" href="#collapseListGroup1" aria-expanded="true" aria-controls="collapseListGroup1"> {this.props.categoryName} </a>
            </h4>
        </div>

        <div id="collapseListGroup1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading1" aria-expanded="true">
          <ul class="list-group">
            {menuItems}
          </ul>
        </div>

      </div>
    );
  }
});


var MenuItem = React.createClass({
  render: function(){
    var model = this.props.model;

    return(
      <li class="list-group-item">
        {model.get("name")}
        <a class="btn btn-primary" onClick={this.props.addItemToOrder.bind(this, model)}>Add to Order</a>
      </li>
    );
  }

});


module.exports = {
  'AppComponent': AppComponent
}

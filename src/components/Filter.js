import React,{Component} from "react";

export default class Filter extends Component {
    render(){
        return(
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-order">
                    Order 
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value="">Lowest</option>
                        <option value="">Highest</option>
                        <option value="">L</option>
                    </select>
                </div>
                <div className="filter-size">
                    Size 
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import Roomdetaillist from './Roomdetaillist'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import './pop.css'

class RoomDetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
    render() {
            return (
                  <div className='popup'>
                    <div className='popup-inner'>
                      <h3>{this.props.data.name}</h3>
                      <div className="address">{this.props.data.address}</div>
                      <div className="address">  {this.props.data.city}  {this.props.data.state}  {this.props.data.pincode}</div>
                      <button onClick={this.props.closePopup} >X</button>
                      <Roomdetaillist data={this.props.data} addBed={this.props.addBed} addAmin={this.props.addAmin}></Roomdetaillist>
                    <label>Total no of room selected : {this.props.count}</label>
                    <button><NavLink to='/Summary'>Book</NavLink></button>
                    <button onClick={()=>this.props.bookBed()}>Add</button>
                    {console.log(this.props.bList)}
                    {
                      this.props.bList.map((dat,key)=>(
                        <li>`{dat.bed.bed_id} {this.props.bprice}`</li>
                      ))
                    }
                    {
                      this.props.aList.map((data,key)=>(
                        <li>`{data.name} {data.charge}`</li>
                      ))
                    }
                    {<li>Total Price: {this.props.tprice}</li>}
                    {/* <button onClick={()=>this.props.bookBed()}>Book</button> */}
                    {/* </NavLink> */}
                    {/* <button onClick={this.props.closePopup}>Continue</button> */}
                    </div>
                  </div>
            );
    }
}

function mapStateToProps(state){
  return {
     count: state.bedBook.bookingCount,
     bList: state.bedBook.bedList,
     aList: state.bedBook.aminList,
     bprice: state.bedBook.bedprice,
     tprice: state.bedBook.totalprice,
  }
}
function mapDispatchToProps(dispatch){
  return {
    addBed:(bed,price)=>{
      dispatch({type: 'ADD_BED', payload:{bed:bed,price:price}})
    },
    addAmin:(amin)=>{
      dispatch({type: 'ADD_AMIN', payload: amin})
    },
    bookBed:()=>{
      dispatch({type: 'BOOK_BED'})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RoomDetails)

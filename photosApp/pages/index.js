import React from 'react'
import '../css/pages.css'
import Photo from './photo'
import {
    Route,
    Link,
    HashRouter
  } from "react-router-dom";

const API = 'https://api.unsplash.com/photos/?client_id=7b42abfc5344bebed9c68152fa09309914b18c8a40af0ae2c44be28eb1294a8d';
const d  = []
export default class extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photos: null,
          filterePhoto:null,
          search: ''
       };
       this.doSearch = this.doSearch.bind(this);
       
    }

    componentDidMount() {
        this.loadData();
      }
    
     loadData = async() => {    
        fetch(API)
        .then(data => data.json())
        .then((data) => {
          this.setState({ photos:data,filteredPhoto:data})
        });
    }

    doSearch(){
        console.log(this.refs.name.value)
        this.setState({
            search: this.refs.name.value//.substr(0,15)
      });

       
    }

    render () {
        
       console.log(this.state.photos)

       if(this.state.photos==null){

           return <p>loading</p>

       }else{ 

            let filterd = this.state.photos.filter((item,i)=>{
                  return item.user.username.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1
                }
            );
           return(
               <HashRouter>
                   
                   <div>
                        <div className="content">
                            <div className = "searchBar">
                                <form id="SearchItem" className = "SearchItem">
                                    <div class="ui action left icon input" id="search">
                                    <input type="text" placeholder="Search..."  ref="name" onInput={this.doSearch}/>
                                    <i className="search link icon"></i>
                                    </div>
                                </form> 
                            </div>

                           
                            <div className="card-group">
                            {filterd.map( (item,key) =>{
                                return(
                                   
                                    <div className="card"  index = {key}>
                                    <Link to={`/photo/${item.id}`}>
                                        <img src={item.urls.raw} className="img"/>
                                    </Link>
                                        <div className="container">
                                        <p>{item.user.username}</p> 
                                        </div>
                                    </div>
                                    
                                )
                             })}
                           </div>
                          
                        </div>
                        <Route path = '/photo/:id' component={Photo}/>
                    </div>
               </HashRouter>
           )
       }
              
    }
}



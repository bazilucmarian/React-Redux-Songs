import React from 'react';
import {connect} from 'react-redux'
import {selectSong} from '../actions'

class SongList extends React.Component{

    renderList(){
        return this.props.songs.map((song,index)=>{
            return(
                <div className="item" key={index}>
                    <div className="right floated content">
                        <button 
                        onClick={()=>this.props.selectSong(song)}
                        className="ui button primary">
                            Select
                        </button>
                    </div>
                   
                    <div className="content">{song.title}</div>
                    <hr/>
                </div>
            )
        })
    }

    render(){
        
        return <div className="ui devided list">{this.renderList()}</div>
    }

};

const mapStateToProps=(state)=>{
    
        return {
            songs:state.songs
        }
}

export default connect(mapStateToProps, {
   selectSong
})(SongList);
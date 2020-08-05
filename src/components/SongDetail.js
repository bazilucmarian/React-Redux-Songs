import React from 'react';
import {connect} from 'react-redux';

const SongDetail=({song})=>{
    console.log(song)
    if(!song){
        return <h1>Select a song</h1>
    }
    return(
        <div>
            <h3>Details for:</h3>
            <p>
                Title:{song.title}
                <hr/>
                Duration:{song.duration}
            </p>
            </div>
    )
}

const mapStateToProps=(state)=>{
    console.log(state)
    return{
       song:state.selectedSong
    }
}
export default connect(mapStateToProps)(SongDetail);
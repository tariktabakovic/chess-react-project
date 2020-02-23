import React from 'react';

export default class FetchLeaderBoards extends React.Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const url = 'https://api.chess.com/pub/leaderboards';
        const response = fetch(url);
    }
    
    render () {
        return 
        <div>
            {this.state.loading ? <div>loading...</div> : <div>person..</div>}
        </div>
    }
}
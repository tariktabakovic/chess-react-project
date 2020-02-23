import React from 'react';

export default class FetchLeaderBoards extends React.Component {

    state = {
        loading: true,
        rank: null
    }

    async componentDidMount() {
        const url = 'https://api.chess.com/pub/leaderboards';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({rank: data.daily.rank[0]})
        console.log(data.daily);
    }
    
    render () {
        return (
        <div>
            {this.state.loading ? <div>loading...</div> : <div></div>}
        </div>
        )
    }
}
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
        this.setState({rank: data.daily[0], loading: false});
        console.log(data.daily);
    }
    
    render () {
        return (
        <div>
            {this.state.loading || !this.state.rank? (
            <div>loading...</div> 
            ) : ( 
            <div>
                <div>{this.state.rank.username}</div>
            </div>
            )}
        </div>
        )
    }
}
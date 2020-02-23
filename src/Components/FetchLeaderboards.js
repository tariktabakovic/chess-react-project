import React from 'react';

export default class FetchLeaderBoards extends React.Component {

    state = {
        loading: true,
        rank1: null,
        rank2: null,
        rank3: null,
        rank4: null,
        rank5: null
    }

    async componentDidMount() {
        const url = 'https://api.chess.com/pub/leaderboards';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            rank1: data.daily[0], loading: false,
            rank2: data.daily[1], loading: false,
            rank3: data.daily[2], loading: false,
            rank4: data.daily[3], loading: false,
            rank5: data.daily[4], loading: false
        });
        
        console.log(this.state.rank2);
        console.log(this.state.rank1);
        console.log(this.state.rank3);

    }
    
    render () {
        return (
        <div className = 'top5'>

            <div>
                {this.state.loading || !this.state.rank1? (
                    <div>loading...</div> 
                    ) : ( 
                        <div>
                    <div>Rank: {this.state.rank1.rank}</div>
                    <div>Username: {this.state.rank1.username}</div>
                    <div>Score: {this.state.rank1.score}</div>
                    <div>
                        <img src = {this.state.rank1.avatar} height= '70px' width= '70px'/>
                    </div>
                </div>
                )}
            </div>
            <div>
                {this.state.loading || !this.state.rank2? (
                    <div>loading...</div>
                    ) : (
                        <div>
                    <div>Rank: {this.state.rank2.rank}</div>
                    <div>Username: {this.state.rank2.username}</div>
                    <div>Score: {this.state.rank2.score}</div>
                    <div>
                        <img src = {this.state.rank2.avatar} height= '70px' width= '70px'/>
                    </div>
                </div>
                )}
            </div>
            <div>
                {this.state.loading || !this.state.rank3? (
                    <div>loading...</div>
                    ) : (
                        <div>
                    <div>Rank: {this.state.rank3.rank}</div>
                    <div>Username: {this.state.rank3.username}</div>
                    <div>Score: {this.state.rank3.score}</div>
                    <div> 
                        <img src = {this.state.rank3.avatar} height= '70px' width= '70px'/>
                    </div>
                </div>
                )}
            </div>
            <div>
                {this.state.loading || !this.state.rank4? (
                    <div>loading...</div>
                    ) : (
                        <div>
                    <div>Rank: {this.state.rank4.rank}</div>
                    <div>Username: {this.state.rank4.username}</div>
                    <div>Score: {this.state.rank4.score}</div>
                    <div> 
                        <img src = {this.state.rank4.avatar} height= '70px' width= '70px'/>
                    </div>
                </div>
                )}
            </div>
            <div>
                {this.state.loading || !this.state.rank5? (
                    <div>loading...</div>
                    ) : (
                        <div>
                    <div>Rank: {this.state.rank5.rank}</div>
                    <div>Username: {this.state.rank5.username}</div>
                    <div>Score: {this.state.rank5.score}</div>
                    <div> 
                        <img src = {this.state.rank5.avatar} height= '70px' width= '70px'/>
                    </div>
                </div>
                )}
            </div>
        </div>
        )
    }
}
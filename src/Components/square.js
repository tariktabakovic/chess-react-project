import React from './node_modules/react';
import {SYMBOLS} from '../PieceConstants/index';

export default class Square extends Component {
    render() {
        return (
            <div>
                <h1>{SYMBOLS}</h1>
            </div>
        )
    }
}



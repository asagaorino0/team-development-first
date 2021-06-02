import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { Fetch } from '../features/fetch/fetch';
import PageB from './PageB';
const PageA = () => {
    // const history = useHistory()
    // const onTop = () => {
    //     history.push('/PageB');
    // }
    return (
        <div>
            pageA
            <Fetch />
            {/* <h3 onClick={onTop}>PageB</h3> */}
        </div>
    )
}

export default PageA

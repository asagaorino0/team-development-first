import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectData, fetchGetData } from './fetchSlice';
// import styles from './fetch.module.css';
export function Fetch() {
    const data = useAppSelector(selectData);
    const dispatch = useAppDispatch();
    useEffect(() => {
        fetchUserData();
    },
        // eslint-disable-next-line 
        []);

    const fetchUserData = async () => {
        await dispatch(fetchGetData());
        console.log('fetch:', data);
    };
    return (
        <div>
            <ul>
                {
                    data
                        .filter((data) => data.id % 2 !== 0)
                        .map(item => {
                            return (
                                <h5 key={item.id}>{item.id}:{item.name}
                                </h5>
                            )
                        })
                }
            </ul>
        </div>
    )
}

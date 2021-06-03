import React, { useState } from 'react';
import { CpuType } from '../types/UserType';
import './../App.css';

const PageB: React.FC<CpuType> = () => {
    const [cpu, setCpu] = useState<string>('');
    const uranau = () => {
        var array1 = ['大吉', '中吉', '小吉', '凶', '大凶'];
        const cpu0 = (array1[Math.floor(Math.random() * array1.length)])
        // console.log('cpu', cpu0)
        setCpu(cpu0)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={uranau} style={{ marginBottom: '50px' }}
            >omikuzi
            </button>
            {cpu.length !== 0 &&
                <div className="App-logo"
                    style={{
                        borderRadius: '50%',
                        width: '160px',
                        height: '160px',
                        fontSize: '70px',
                        color: '#fff',
                        backgroundColor: 'red',
                        margin: '0 auto',
                        lineHeight: '150px'
                    }}>{cpu}</div>}

        </div>
    )
}

export default PageB

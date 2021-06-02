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
            {/* // <div className="App"> */}
            <button onClick={uranau} style={{ marginBottom: '50px' }}
            >omikuzi
            </button>
            {cpu.length !== 0 &&
                <div className="App-logo"
                    style={{
                        borderRadius: '50%',
                        width: '160px',
                        height: '160px',
                        fontSize: '78px',
                        color: '#fff',
                        backgroundColor: 'red',
                        // display: 'inlineBlock',
                        margin: '0 auto',
                        // textAlign: 'center',
                        // alignItems: 'center',
                        alignSelf: 'center',
                        display: 'inherit',
                        alignItems: 'inherit',
                        justifyContent: 'inherit',
                    }}>{cpu}</div>}

        </div>
    )
}

export default PageB

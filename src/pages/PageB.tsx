import React, { useState } from 'react';
import { CpuType } from '../types/UserType';

const PageB: React.FC<CpuType> = () => {
    const [cpu, setCpu] = useState<string>('');
    const uranau = () => {
        var array1 = ['大吉', '中吉', '小吉', '凶', '大凶'];
        const cpu0 = (array1[Math.floor(Math.random() * array1.length)])
        // console.log('cpu', cpu0)
        setCpu(cpu0)
    }

    return (
        <div >
            <button onClick={uranau}
            >omikuzi
            </button>
            <h1>{cpu}</h1>
        </div>
    )
}

export default PageB

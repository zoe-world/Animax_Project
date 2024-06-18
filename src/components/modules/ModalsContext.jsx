import { createContext } from 'react'

export const ModalsDispatchContext = createContext({
    // 모달을 열고 닫는 함수구현
    open : ()=>{},
    close : ()=>{},
});

export const ModalsStateContext = createContext([]);


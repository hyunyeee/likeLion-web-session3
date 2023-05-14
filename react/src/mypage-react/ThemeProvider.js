import React, { useState, useMemo } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);

    const toggle = () => {
        setDark(!dark);
    };

    const theme = useMemo(
        () => ({
            dark,
            toggle,
        }),
        [dark]
    );

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

//ThemeProvider 컴포넌트에서는 useState 훅을 사용하여 dark 상태값을 설정하고, toggle 함수를 정의합니다.
// useMemo 훅을 사용하여 ThemeContext에 제공할 theme 객체를 만듭니다.
// theme 객체는 dark와 toggle 속성을 포함하며, dark 상태값이 변경될 때마다 다시 계산됩니다.
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

interface tweenProps {
    entryLength: number;
    delay: number;
    exitLength: number;
}

const useCalculatePageTween = (): tweenProps => {
    const [tweenLength, setTweenLength] = useState({
        entryLength: 0.35,
        delay: 0.2,
        exitLength: 0.5,
    });
    const matched = useMediaQuery('(min-width: 1200px)');

    useEffect(() => {
        const calculateTween = matched
            ? {
                  entryLength: 0.2,
                  delay: 0,
                  exitLength: 0.2,
              }
            : {
                  entryLength: 0.3,
                  delay: 0.3,
                  exitLength: 0.5,
              };

        setTweenLength(calculateTween);
    }, [matched]);

    return tweenLength;
};

export default useCalculatePageTween;

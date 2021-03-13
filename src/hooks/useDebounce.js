import { useState, useEffect, useCallback, useRef }from 'react';

export function useDebounce(val, delay=500) {
    // Set state & setter for debounce val
    const [debounceValue, setDebounceValue] = useState(val);

    useEffect(()=> {
        const handler = setTimeout(()=>{
            setDebounceValue(val)
        }, delay)

        return ()=>{
            clearTimeout(handler);
        }
    }, [val, delay])

    return debounceValue;

}

export function useDebounceCallback(func, delay = 400) {
    let debounce = useRef(null)

    return useCallback(
        (...args) => {
            const context = this
            clearTimeout(debounce.current)

            debounce.current = setTimeout(() => {
                func.apply(context, args)
            }, delay)
        },
        [func, delay])
}

/**
 *  USE useDebounceCallback
 * const handleWindowResize = useDebounce(SetWindow)
 *  useEffect(() => {
 *      window.addEventListener('resize', handleResize)
 *
 *      handleResize()
 *      return () => {
 *          window.removeEventListener('resize', handleResize)
 *          }
 *      }, [])
 */



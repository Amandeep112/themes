import {  useState } from "react";

export function useLocalStorage<T>(
    key: string,
    initialValue: T,
): [T, (value: T | ((val: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(initialValue);

    // useEffect(() => {
    //     try {
    //         const item = window && window.localStorage.getItem(key);
    //         return item ? JSON.parse(item) : initialValue;
    //     } catch (error) {
    //         console.log(error);
    //         return initialValue;
    //     }
    // });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            // if (typeof window !== "undefined") {
            window &&
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            // }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [storedValue, setValue];
}

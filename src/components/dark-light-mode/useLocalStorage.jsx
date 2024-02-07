import { useEffect, useState } from "react"
// Import necessary hooks from React

// Define the custom hook useLocalStorage
export default function useLocalStorage(key, defaultValue) {
    
    // Use the useState hook to manage the state of the value
    const [value, setValue] = useState(() => {
        let currentValue;

        // Try to parse the value stored in localStorage with the provided key
        try {
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            );
        } catch (error) {
            // If there's an error (e.g., invalid JSON), log it and use the default value
            console.log(error);
            currentValue = defaultValue;
        }

        // Return the initial value for the state
        return currentValue;
    });

    // Use the useEffect hook to persist the value to localStorage when it changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]); // Re-run the effect when key or value changes

    // Return the current value and a function to update it (similar to useState)
    return [value, setValue];   
}



// localStorage is a web storage object in web browsers that allows you to store key-value pairs in a web browser 
// with no expiration time. The data stored in localStorage persists even when the browser is closed and reopened.

//  The code attempts to retrieve the stored value, and if successful, it parses it as JSON. If there is an issue with 
// retrieval or parsing (e.g., if the data is not present or is invalid JSON), it falls back to a default value.

// localStorage.getItem(key) || String(defaultValue);

// This expression attempts to get the value associated with the key from localStorage. If the value is not found 
// (getItem returns null), it falls back to the string representation of the defaultValue. 
// This value is then used as the initial state for the React component.
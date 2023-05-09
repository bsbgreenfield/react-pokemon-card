import React, {useState} from "react";

const useFlip = () => {
    const [isFlipped, setIsFlipped] = useState(true);
    const toggleFlip = () => {
        setIsFlipped(isFlipped => !isFlipped)
    }
    return [isFlipped, toggleFlip]
}

export default useFlip
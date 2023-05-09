import axios from "axios";
import React, {useState, useEffect} from "react";
import {v4 as uuid} from 'uuid'

const useFlip = () => {
    const [isFlipped, setIsFlipped] = useState(true);
    const toggleFlip = () => {
        setIsFlipped(isFlipped => !isFlipped)
    }
    return [isFlipped, toggleFlip]
}

const useAxios = (baseUrl, query='') => {
    const [data, setData] = useState([])
    const callAxios = async() => {
        console.log(query)
        let customUrl;
        if (query) customUrl = `${baseUrl}/${query}/`
        let response = await axios.get(customUrl ? customUrl : baseUrl)
        setData([...data, {...response.data, id: uuid()} ])
    }

    return [data, callAxios]
}


export {useFlip, useAxios}
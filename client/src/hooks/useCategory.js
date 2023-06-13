import { useState, useEffect } from "react";
import axios from "axios";
import { serverAPI } from "../index";

export default function useCategory() {
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        try {
            const { data } = await axios.get(`${serverAPI}/category/get-category`)
            setCategories(data?.category)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    return categories
}
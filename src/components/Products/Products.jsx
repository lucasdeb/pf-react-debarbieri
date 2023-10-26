import React from "react";
import { Link } from "react-router-dom";
import {useItems} from '../../Hooks/useItems';
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore';

const Products = () => {
    const db = getFirestore();
    const itemCollection = collection(db, "items")
    getDocs(itemCollection).then((res) => {
        console.log(res.docs.map(doc=>doc.data()))
    })

    const itemRef = doc(db, "items", "B0HfoR7KtaIMitWb3yMn")
    getDoc(itemRef).then(documento => {
        console.log(documento.data())
    },[])

    const items = useItems()
    return(
        <>
            <div>
                <h1>Products</h1>
            </div>
        </>
    )
}
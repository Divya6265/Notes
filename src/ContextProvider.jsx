import React, { Children, useState, useEffect } from "react"
import {getDocs, collection } from "firebase/firestore";
import Mycontext from "./MyContext"

const MyProvider = ({children}) => {
    const [notes, setNotes] = useState([]);

        useEffect(() => {
          const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "files"));
            const data = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setNotes(data);  
        
          };
          fetchData();
        }, []);
    
    return (
        <Mycontext.Provider value={{...notes, setNotes}}>
          {children}
        </Mycontext.Provider>
    )
}

export default MyProvider;
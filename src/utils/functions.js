// Database bilgi ekleme,bilgiyi alma, bilgi silme ve değiştirme
import firebase from "./firebase"
import {useState,useEffect} from "react";
import { getDatabase,ref,set,push,onValue, remove,update} from "firebase/database";
import Toastify from "./toast";

// Bilgi Ekleme
export const AddUser=(info)=>{
    const db = getDatabase();
    const userRef=ref(db,"baglanti");
    const newUserRef=push(userRef)
    set((newUserRef),{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender,
    })
}

// Bilgi Çağırma

export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [contactList,setContactList]=useState();

    useEffect(() => {
        setIsLoading(true)

        const db = getDatabase();
        const userRef=ref(db,"baglanti");

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const baglantiArray=[];

            for(let id in data){
                baglantiArray.push({id,...data[id]})
            }          
            setContactList(baglantiArray);
            setIsLoading(false);
        });
    },[])
    return {isLoading,contactList}
}

// Bilgi silme
export const DeleteUser=(id)=>{
        const db = getDatabase();
        const userRef=ref(db,"baglanti");
        remove(ref(db,"baglanti/"+id))

        Toastify("Kullanıcı bilgisi silindi")
}

// Bilgi Değiştirme

export const EditUser=(info)=>{
    const db = getDatabase();
    const updates = {};

    updates["baglanti/"+info.id]=info;
    return update(ref(db),updates);

}
import React from "react";
import { Git } from "../Components/Search/index";
import { useState } from "react";
import { useProps } from "../Tipo/use";
import { Users } from "../Components/Users/index";
import'../Style/home.css'
import { Image } from "@chakra-ui/react";
import { Erro } from "../Components/Erro";

export function Home(){

    const [use, setUser] = useState< useProps | null >(null);
    const[error, setError]= useState(false) //estado de erro 
    const LoginUser = async (userName:string) =>{
        setError(false)
        setUser(null)
        const res = await fetch(`https://api.github.com/users/${userName}`) //link da api do git
        const data = await res.json();
        if(res.status ===404){
            setError(true)
            return;
        }
        const {  avatar_url, login,  location,  followers,  following } = data
        const userDate: useProps={
            avatar_url, 
            login,  
            location,  
            followers,  
            following
        }
        setUser(userDate)
    }
    return(
       <>
       <div className="container">
         <h1>Busque seu Perfil no Github</h1>
         <Image src="img/st-github.png" width={24}/>
         <Git LoginUser={LoginUser}/>
       </div>
       <div className="conten">
        {use && <Users{...use}/>}
        {error && <Erro/>}
       </div>
       </>
    )
    
}
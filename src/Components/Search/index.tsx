type GitProps ={
    LoginUser: (userName:string)=> Promise<void>
};

import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, KeyboardEvent } from "react";
import "./index.css"

export function Git({LoginUser}: GitProps){
const [userName, setUserName] = useState("");
const handleKeyDown = (e:KeyboardEvent)=>{
    if(e.key === "Enter"){
        LoginUser(userName)
    }
}
   return(
       <>
           <Flex p="5" align="center" gap="5">
           <Input id="inputSearch" placeholder='Digite o nome de usuário' w={600} bg="blackAlpha.200" onChange={(e)=>setUserName(e.target.value)} onKeyDown={handleKeyDown}/>
           <Button  onClick={()=>LoginUser(userName)}>
           <FontAwesomeIcon icon={faSearch} className="pesquisa" />
           </Button>
          </Flex>
       </>
   )
}
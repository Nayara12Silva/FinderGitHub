import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { faLocation, faLocationArrow, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useProps } from "../../Tipo/use";
import './users.css'

export const Users=({ avatar_url, login,  location,  followers,  following }: useProps )=>{
    return(
        <div className="content">
            <Image src={avatar_url} alt={login}w={300} borderRadius="50%"/>
            <h2>{login}</h2>
            <p>
                <span>{location}</span>
                <FontAwesomeIcon icon={faLocationPin}/>

            </p>
           <div className="segui">
           <div className="followers">
                <p>Seguindo</p>
                <span>{following}</span>
            </div>
            <div className="followers">
                <p>Seguidores</p>
                <span>{followers}</span>
            </div>
           </div>

        </div>
    )
}
import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { FETCH_BOARD } from './BoardDetail.queries' 

export default function BoardDetail() {
    
    const [show, setShow] = useState(false)
    
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.id
        }
    })
    
    // console.log("fetchBoard", data)
    const { title, writer, contents, createdAt } = data?.fetchBoard || {};
    
    const onMouseOverLocation = () => {
        setShow(!show)
        console.log("setShow(!show)", show)
    }

    return <BoardDetailUI show={show} title={title} writer={writer} contents={contents} createdAt={createdAt} onMouseOverLocation={onMouseOverLocation}/>
}
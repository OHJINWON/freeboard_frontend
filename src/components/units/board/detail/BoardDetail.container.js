import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARD } from './BoardDetail.queries' 
import { DELETE_BOARD } from './BoardDetail.queries'

export default function BoardDetail() {
    
    const [show, setShow] = useState(false)
    
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.id
        }
    })
    
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const onClickDelete = async() => {
        try {
            const result = await deleteBoard ({
                variables: {
                    boardId: router.query.id
                }

            })
            console.log("result", result)
            alert("삭제하셨습니다.")
            router.push("/boards/list")
        } catch (error) {
            console.log(error.message)
        }
    }
    
    const { title, writer, contents, createdAt } = data?.fetchBoard || {};
    
    const onMouseOverLocation = () => {
        setShow(!show)
        console.log("setShow(!show)", show)
    }

    const onClickMove = () => {
        router.push(`/boards/${router.query.id}/edit`)
    }

    return <BoardDetailUI show={show} onClickMove={onClickMove} title={title} writer={writer} contents={contents} createdAt={createdAt} onMouseOverLocation={onMouseOverLocation} onClickDelete={onClickDelete}/>
}
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { useState } from "react";
import { FETCH_BOARD } from './BoardDetail.queries' 
import { DELETE_BOARD } from './BoardDetail.queries'
import { IMutation, IMutationDeleteBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";

export default function BoardDetail() {
    const router = useRouter()
    const [show, setShow] = useState<boolean>(false)

    if(!router || typeof router.query.id !== "string") return<></>

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {
            boardId: router.query.id
        }
    })
    
    console.log("상세보기:",data?.fetchBoard)
    const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(DELETE_BOARD)

    const onClickDelete = async() => {
        if(!router ||typeof router.query.id !== "string") return<></>
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
            if(error instanceof Error) {
                console.log(error.message)
            }
        }
    }
    
    
    const onMouseOverLocation = () => {
        setShow(!show)
        // setShow((prev) => !prev);
        console.log("setShow(!show)", show)
    }

    const onClickMove = () => {
        router.push(`/boards/${router.query.id}/edit`) 
    }



    return <BoardDetailUI 
        show={show}
        onClickMove={onClickMove}
        data={data}
        onMouseOverLocation={onMouseOverLocation}
        onClickDelete={onClickDelete}
        />
}
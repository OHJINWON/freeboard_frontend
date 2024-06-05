import { useMutation, useQuery } from "@apollo/client";
import BoardCommentWirteUI from "./BoardCommentWrite.presenter";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentWrite.queries"
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../../../commons/types/generated/types";
import { Flex, Rate } from 'antd';

export default function BoardCommentWrite() {

    const router = useRouter()

    const desc = [1, 2, 3, 4, 5]

    const [rateValue, setRateValue] = useState<number>(0)    
    const [writer, setWriter] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [contents, setContnets] = useState<string>("")

    const [createBoardComment] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT)

    const onChangeWrite = (e: ChangeEvent<HTMLInputElement>) => {
        setWriter(e.target.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContnets(e.target.value)
    }

    const handleChangeRate = (value: number) => {
        setRateValue(desc[value -1])
    }

    console.log("rateValue", rateValue)
    const onClickComment = async() => {
        try {
            if(typeof router.query.id !== "string") {
                alert("시스템에 문제가 있습니다.")
                return;
            }
            await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                        writer,
                        password,
                        rating : rateValue,
                        contents,
                    },  
                    boardId: router.query.id
                }, refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables:{ boardId: router.query.id }
                    },
                ],
            })
        
        alert("댓글이 성공적으로 등록되었습니다.")    
        } catch (error) {
            if(error instanceof Error) alert(error.message)             
        }
    }

    return <BoardCommentWirteUI 
        onChangeWrite={onChangeWrite} 
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents} 
        onClickComment={onClickComment}
        handleChangeRate={handleChangeRate}
        rateValue={rateValue}
        contents={contents}
        />
}
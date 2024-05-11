import { useMutation, useQuery } from "@apollo/client";
import BoardCommentWirteUI from "./BoardCommentWrite.presenter";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries"
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries"
import { useState } from "react";
import { useRouter } from "next/router";

export default function BoardCommentWrite() {

    const router = useRouter()

    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [contents, setContnets] = useState("")
    const [rating, setRating] = useState("")

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
    const { data } = useQuery(FETCH_BOARD_COMMENTS)

    const onChangeWrite = (e) => {
        setWriter(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeRating = (e) => {
        setRating(e.target.value)
    }
    const onChangeContents = (e) => {
        setContnets(e.target.value)
    }


    const onClickComment = async() => {
        try {
            const result = await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                        writer: writer,
                        password: password,
                        rating : 2,
                        contents : contents
                    },
                    boardId: router.query.id
                }, refetchQueries: [{query: FETCH_BOARD_COMMENTS}]
            })
            console.log("result 댓글등록", result)
        } catch (error) {
            console.log("error.message 댓글등록 에러 메세지", error.message)            
        }
    }

    return <BoardCommentWirteUI onChangeWrite={onChangeWrite} onChangePassword={onChangePassword} onChangeRating={onChangeRating} onChangeContents={onChangeContents} onClickComment={onClickComment} writer={writer} password={password} rating={rating} contents={contents}/>
}
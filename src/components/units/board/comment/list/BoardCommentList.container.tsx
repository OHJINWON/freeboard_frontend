import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../../commons/types/generated/types";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries"
import BoardCommentListUI from "./BoardCommentList.presenter";
import { ChangeEvent, MouseEvent, useState } from "react";
export default function BoardCommentList(): JSX.Element {

    const router = useRouter()
    if (typeof router.query.id !== "string") return <></>;

    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const [boardCommentId, setBoardCommentId] = useState("")
    const [password, setPassword] = useState("")


    const [deleteBoardComment] = useMutation<Pick<IMutation,"deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT)

    const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.id
        }
    })
    
    const onClickDeleteModal = (e: MouseEvent<HTMLButtonElement>): void => {
        setBoardCommentId(e.currentTarget.id)
        setIsOpenDeleteModal(true)
    }

    const onChangeDeletePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value)
    }

    const onClickDelete = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        // const password = prompt("비밀번호 입력하세요.")
        try {
            await deleteBoardComment ({
                variables: {
                    password,
                    boardCommentId,
                },
                refetchQueries: [
                    {
                      query: FETCH_BOARD_COMMENTS,
                      variables: { boardId: router.query.id },
                    },
                  ],
            })
            setIsOpenDeleteModal(false)
        } catch (error) {
            if(error instanceof Error) alert("틀림: " + error.message)
        }
    }


    return <BoardCommentListUI 
        data={data} 
        onClickDelete={onClickDelete}
        onClickDeleteModal={onClickDeleteModal}
        isOpenDeleteModal={isOpenDeleteModal}
        onChangeDeletePassword={onChangeDeletePassword}
        />
}
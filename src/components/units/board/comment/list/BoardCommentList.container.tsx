import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../../commons/types/generated/types";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries"
import BoardCommentListUI from "./BoardCommentList.presenter";
import { MouseEvent } from "react";
export default function BoardCommentList() {
 
    const router = useRouter()
    if(!router || typeof router.query.id !== "string") return <></>
    
    const [deleteBoardComment] = useMutation<Pick<IMutation,"deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT)

    const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: {
            page: 1,
            boardId: router.query.id
        }
    })
    
    const onClickDelete = async (e: MouseEvent<HTMLButtonElement>) => {
        const password = prompt("비밀번호 입력하세요.")
        alert(typeof password)
        // if(!password) return
        try {
            if(!(e.target instanceof HTMLButtonElement)) {
                alert("시스템에 문제가 있습니다.")
                return;
            }
            await deleteBoardComment ({
                variables: {
                    password: password,
                    boardCommentId: e.target.id
                    
                },
                refetchQueries: [
                    {
                      query: FETCH_BOARD_COMMENTS,
                      variables: { boardId: router.query.id },
                    },
                  ],
            })
        } catch (error) {
            if(error instanceof Error) alert("틀림: " + error.message)
        }
    }

    return <BoardCommentListUI data={data} onClickDelete={onClickDelete}/>
}
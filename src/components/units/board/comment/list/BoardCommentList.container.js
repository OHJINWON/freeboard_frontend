import { useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries"
import { useRouter } from "next/router";
export default function BoardCommentList() {

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
        variables: {
            page: 1,
            boardId: router.query.id
        }
    })
    
    // console.log("채팅 리스트 router", router.query.id)
    console.log("채팅 리스트 data", data)
    return <BoardCommentListUI data={data}/>
}
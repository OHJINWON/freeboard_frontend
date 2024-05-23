import BoardCommentWrite from "../../../src/components/units/board/comment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/board/comment/list/BoardCommentList.container";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";


export default function BoardDetailPage() {

    return (
        <>
            <BoardDetail/>
            <BoardCommentWrite/>
            <BoardCommentList/>
        </>
    )
}
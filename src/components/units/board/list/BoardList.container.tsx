import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import {FETCH_BOARDS} from "./BoardList.queries"
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export default function BoardList() {

    const router = useRouter()
    
    const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

    const onClickMoveToBoardNew = () => {
        router.push("/boards/new")
    }

    const onClickDetail = (e: MouseEvent<HTMLTableRowElement>) => {
        // if(e.target instanceof HTMLElement)
            // alert(e.currentTarget.id)
            // router.push(`/boards/${e.target.id}`)
        router.push(`/boards/${e.currentTarget.id}`)
    }


    
    return (
        <BoardListUI 
            data={data} 
            onClickDetail={onClickDetail}
            onClickMoveToBoardNew={onClickMoveToBoardNew}
        />
    )
}
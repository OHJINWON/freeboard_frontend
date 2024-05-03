import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import {FETCH_BOARDS} from "./BoardList.queries"
import { useRouter } from "next/router";

export default function BoardList() {

    const router = useRouter()
    
    const { data } = useQuery(FETCH_BOARDS, {
        variables: {
            page: 1
        }
    })

    const onClickDetail = (e) => {
        router.push(`/boards/${e.currentTarget.id}`)
    }

    return<BoardListUI data={data} onClickDetail={onClickDetail}/>
}
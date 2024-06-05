import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/writte/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId: $boardId){
            _id
            title
            writer
            contents
            createdAt
            youtubeUrl
            boardAddress {
                zipcode
                address
                addressDetail
            }
        }   
    }
`

export default function BoardEdit() {

    const router = useRouter()
    if(!router || typeof router.query.id !== "string") return <></>
    
    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables:{
            boardId: router.query.id
        }
    })
    console.log(data?.fetchBoard)
    return <BoardWrite isEdit={true} data={data}/>
}
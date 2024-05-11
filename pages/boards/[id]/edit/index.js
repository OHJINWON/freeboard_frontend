import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/writte/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId: $boardId){
            _id
            title
            writer
            contents
            createdAt
        }   
    }
`

export default function BoardEdit() {

    const router = useRouter()
    
    const { data } = useQuery(FETCH_BOARD, {
        variables:{
            boardId: router.query.id
        }
    })

    return <BoardWrite isEdit={true} data={data}/>
}